import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEdit, FaTrashAlt, FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const usersPerPage = 5;

  // 🚀 Fetch all users from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // 🛠️ Handle Delete
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/student/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        alert("User deleted successfully!");
      })
      .catch((err) => console.error("Error deleting user:", err));
  };

  // 🛠️ Handle Edit
  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = (id) => {
    axios
      .put(`http://localhost:8000/student/${id}`, editedUser)
      .then(() => {
        alert("User updated successfully!");
        setUsers(
          users.map((user) => (user.id === id ? { ...editedUser, id } : user))
        );
        setEditingUserId(null);
      })
      .catch((err) => console.error("Error updating user:", err));
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setEditedUser({});
  };

  // 🔍 Search functionality
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AllUsersContainer>
      <h1>All Users</h1>
      <SearchBarContainer>
        <FaSearch />
        <SearchBar
          type="text"
          placeholder="Search Users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBarContainer>
      <Table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id - 1}</td>
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      name="name"
                      value={editedUser.name}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      name="profession"
                      value={editedUser.profession}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      name="email"
                      value={editedUser.email}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      name="mobile"
                      value={editedUser.mobile}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      name="city"
                      value={editedUser.city}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      name="salary"
                      value={editedUser.salary}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <Button onClick={() => saveEdit(user.id)}>
                      <FaCheck />
                    </Button>
                    <ButtonDelete onClick={cancelEdit}>
                      <FaTimes />
                    </ButtonDelete>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.profession}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.city}</td>
                  <td>₹ {user.salary}</td>
                  <td>
                    <Button onClick={() => startEditing(user)}>
                      <FaEdit />
                    </Button>
                    <ButtonDelete onClick={() => handleDelete(user.id)}>
                      <FaTrashAlt />
                    </ButtonDelete>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map(
          (number) => (
            <PageNumber key={number + 1} onClick={() => paginate(number + 1)}>
              {number + 1}
            </PageNumber>
          )
        )}
      </Pagination>
    </AllUsersContainer>
  );
}

const PageNumber = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff0048;
  color: #fff;
  transition: 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #ff0048;
    border: 0.5px solid #dc3545;
  }

  &.active {
    background-color: #ffffff;
    color: #ff0048;
    font-weight: bold;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AllUsersContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;

  text-align: center;
  animation: ${fadeIn} 0.8s ease-in;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  th {
    background-color: #ff0048;
    color: #fff;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonDelete = styled(Button)`
  background-color: #ff0048;
`;

export default AllUsers;
