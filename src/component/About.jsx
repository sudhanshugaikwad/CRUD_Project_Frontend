import React from "react";
import styled, { keyframes } from "styled-components";
import { FaProjectDiagram, FaTools, FaRocket } from "react-icons/fa";

function About() {
  return (
    <AboutContainer>
      <h1>About This Project</h1>
      <p>
        Created by: <span>Sudhanshu Gaikwad</span>
      </p>
      <Section>
        <IconWrapper>
          <FaProjectDiagram />
        </IconWrapper>
        <Text>
          <h2>Why This Project?</h2>
          <p>
            This project was created to showcase advanced frontend development
            skills using React, styled-components, and state management. It
            focuses on creating a professional, interactive, and user-friendly
            CRUD application.
          </p>
        </Text>
      </Section>

      <Section>
        <IconWrapper>
          <FaTools />
        </IconWrapper>
        <Text>
          <h2>Key Features</h2>
          <ul>
            <li>🔧 User Creation, Editing, and Deletion</li>
            <li>🔍 Search Functionality</li>
            <li>📲 Fully Responsive Design</li>
            <li>✨ Smooth Animations & Styled Components</li>
          </ul>
        </Text>
      </Section>

      <Section>
        <IconWrapper>
          <FaRocket />
        </IconWrapper>
        <Text>
          <h2>How It Works?</h2>
          <p>
            Users can create, edit, and delete data in an easy-to-use interface.
            Each action is instantly reflected without page reloads, ensuring a
            seamless experience.
          </p>
        </Text>
      </Section>
    </AboutContainer>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #343a40;
  animation: ${fadeIn} 1s ease-out;
  background: #f8f9fa;
  min-height: 100vh;
  background-color: #f4f4f4;

  h1 {
    font-size: 2.5rem;
    color: #ff0048;
    margin-bottom: 0.5rem;
  }

  p span {
    font-weight: bold;
    color: #ff0048;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 80%;
  max-width: 800px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #ff0048;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Text = styled.div`
  h2 {
    font-size: 1.5rem;
    color: #343a40;
    margin-bottom: 0.5rem;
  }

  p,
  li {
    font-size: 1rem;
    color: #555;
  }
`;

export default About;
