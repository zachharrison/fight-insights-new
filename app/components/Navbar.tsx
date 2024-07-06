import { Link } from "@remix-run/react";
import React from "react";
import { styled, css } from "styled-components";
import { FlexStartDiv } from "../styles/styles";
import { action } from "~/routes/action/set-theme";
import { ThemeToggle } from "./ThemeToggle";

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--primary-dark-color);
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: var(--padding-large) var(--padding-medium);
  @media (max-width: 499px) {
    padding: var(--padding-medium) var(--padding-small);
    gap: 10px;
  }
`;

const LogoContainerDiv = styled.div``;

const IconContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const Logo = styled.img`
  border-radius: 12px;
  width: 60px;
`;

export const Navbar = () => {
  return (
    <ContainerDiv>
      <FlexStartDiv gap="20px">
        <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
          <Logo src="/logo.png" />
        </Link>
        <Link to="/reviews" className="nav-link">
          Reviews
        </Link>
        <Link to="/posts" className="nav-link">
          Blog
        </Link>
      </FlexStartDiv>
      <IconContainerDiv>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='var(--white-color)'
          className='bi bi-search'
          viewBox='0 0 16 16'
          style={{ cursor: 'pointer' }}
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg> */}
        <ThemeToggle />
      </IconContainerDiv>
    </ContainerDiv>
  );
};
