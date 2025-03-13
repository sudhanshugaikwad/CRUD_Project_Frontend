import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaCity,
  FaRupeeSign,
} from "react-icons/fa";

function CreateNewUser() {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    email: "",
    mobile: "",
    city: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <CreateNewUserContainer>
      <h1>Create New User</h1>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <FaUser />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <FaBriefcase />
          <Input
            type="text"
            name="profession"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <FaEnvelope />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <FaPhone />
          <Input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <FaCity />
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <FaRupeeSign />
          <Input
            type="text"
            name="salary"
            placeholder="Salary (₹)"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <Button type="submit">Create User</Button>
      </Form>
    </CreateNewUserContainer>
  );
}

// Keyframe animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CreateNewUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-in;

  h1 {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f9f9f9;

  svg {
    color: #000000;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: #fff;
  background-color: #ff0048;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #ff0048;
    border: 0.5px solid #dc3545;
  }
`;

export default CreateNewUser;
