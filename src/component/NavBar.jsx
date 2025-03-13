import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBarContainer = styled.nav`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .nav-links {
    display: flex;
    gap: 20px;

    a {
      color: #000;
      text-decoration: none;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ff0048;
      }
    }
  }

  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .nav-links {
      display: ${(props) => (props.open ? "flex" : "none")};
      flex-direction: column;
      gap: 15px;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: #fff;
      padding: 20px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContainer open={open}>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className="nav-links">
        <Link to="/" onClick={() => setOpen(false)}>
          <FaHome /> Home
        </Link>
        <Link to="/About" onClick={() => setOpen(false)}>
          <FaInfoCircle /> About
        </Link>
        <Link to="/CreateNewUser" onClick={() => setOpen(false)}>
          <FaUserPlus /> Create New User
        </Link>
        <Link to="/AllUsers" onClick={() => setOpen(false)}>
          <FaUsers /> All Users
        </Link>
      </div>
    </NavBarContainer>
  );
}

export default NavBar;
