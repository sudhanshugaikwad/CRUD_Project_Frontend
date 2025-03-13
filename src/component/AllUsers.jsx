import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";

const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    profession: "Developer",
    email: "john@example.com",
    mobile: "1234567890",
    city: "New York",
    salary: 5000,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Designer",
    email: "jane@example.com",
    mobile: "9876543210",
    city: "Los Angeles",
    salary: 4500,
  },
  {
    id: 3,
    name: "Mike Johnson",
    profession: "Manager",
    email: "mike@example.com",
    mobile: "1122334455",
    city: "Chicago",
    salary: 6000,
  },
  {
    id: 4,
    name: "Sara Lee",
    profession: "Analyst",
    email: "sara@example.com",
    mobile: "5566778899",
    city: "Houston",
    salary: 4800,
  },
  {
    id: 5,
    name: "Tom Hardy",
    profession: "Engineer",
    email: "tom@example.com",
    mobile: "6677889900",
    city: "Boston",
    salary: 5200,
  },
  {
    id: 6,
    name: "Emily Davis",
    profession: "HR",
    email: "emily@example.com",
    mobile: "4433221100",
    city: "Phoenix",
    salary: 4700,
  },
];

function AllUsers() {
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleDelete = (id) => setUsers(users.filter((user) => user.id !== id));
  const handleEdit = (id) => alert(`Edit User ${id}`);

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
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.profession}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.city}</td>
              <td>₹ {user.salary}</td>
              <td>
                <Button onClick={() => handleEdit(user.id)}>
                  <FaEdit />
                </Button>
                <ButtonDelete onClick={() => handleDelete(user.id)}>
                  <FaTrashAlt />
                </ButtonDelete>
              </td>
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AllUsersContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const PageNumber = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff0048;
  color: #fff;

  &:hover {
    background-color: #ffffff;
    color: #ff0048;
    border: 0.5px solid #dc3545;
  }
`;

export default AllUsers;
