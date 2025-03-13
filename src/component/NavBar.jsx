import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.nav`
  width: 95%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }

  .nav-links {
    display: flex;
    gap: 20px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    a {
      color: #000;
      text-decoration: none;
      font-size: 18px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ff0048;
      }
    }
  }

  .auth-buttons {
    display: flex;
    gap: 15px;

    a {
      color: #000;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #dc3545;
      }
    }

    .signup {
      background-color: #000;
      color: #fff;
      padding: 5px 15px;
      border-radius: 20px;
      font-weight: bold;

      &:hover {
        background-color: #333;
        color: white;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .nav-links {
      flex-direction: column;
      gap: 10px;
    }

    .auth-buttons {
      flex-direction: column;
    }
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <div className="logo"></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/CreateNewUser">Create New User</Link>
        <Link to="/AllUsers">All User's</Link>
      </div>
      <div className="auth-buttons">
        {/* <Link to="/Admin" className="signup">
          Admin
        </Link> */}
      </div>
    </NavBarContainer>
  );
}

export default NavBar;
