import React from "react";
import styled, { keyframes } from "styled-components";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const Content = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  animation: ${fadeIn} 1s ease-out;
`;

const Heading = styled.h1`
  color: #ff0048;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.5;
  font-size: 1rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
    color: #007bff;
    cursor: pointer;
  }
`;

function Home() {
  return (
    <Container>
      <Content>
        <Heading>Welcome to My CRUD Project</Heading>
        <Description>
          This project is built with the following technologies:
          <TechList>
            <TechItem>
              <FaReact color="#61DBFB" size={24} /> React JS (Frontend)
            </TechItem>
            <TechItem>
              <SiStyledcomponents color="#db7093" size={24} /> Styled Components
              (CSS Styling)
            </TechItem>
            <TechItem>
              <FaNodeJs color="#3C873A" size={24} /> Node JS & Express JS
              (Backend)
            </TechItem>
            <TechItem>
              <FaDatabase color="#f0db4f" size={24} /> MySQL (Database)
            </TechItem>
          </TechList>
          It supports creating, reading, updating, and deleting users. Explore
          the navigation bar to try it out!
        </Description>
      </Content>
    </Container>
  );
}

export default Home;
