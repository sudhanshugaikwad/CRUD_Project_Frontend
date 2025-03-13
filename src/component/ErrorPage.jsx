import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;

  text-align: center;

  h1 {
    font-size: 5rem;
    color: #dc3545;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #6c757d;
  }

  a {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #ff0048;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background-color: #ffffff;
      color: #ff0048;
      border: 0.5px solid #dc3545;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/">Go Back Home</a>
    </ErrorContainer>
  );
};

export default ErrorPage;
