import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Container } from "../Container/Container";
import { Flex } from '../Flex/Flex';
import { BsMoon as Moon, BsMoonFill as MoonFill } from 'react-icons/bs';
import { Typography } from '../Typography/Typography';

const HeaderElement = styled.header`
   background-color: var(--colors-ui-base) ;
   height: 60px;
   display: flex;
   flex-direction: column;
  justify-content: center;
  box-shadow: var(--shadow);
`
const Logo = styled.div`
   font-size: 1.8rem;
   color: var(--colors-text);
   font-weight: bold;
`

const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const ThemeToggler = styled.div`
   text-transform: capitalize;
   display: flex;
   align-items: center;
   gap: 0.5rem;

   & ${Typography} {
      text-transform: uppercase;
      font-weight: var(--fw-normal);
   }

   & .icon {
      cursor: pointer;
      font-size: 2rem;
   }
`

//
const Header = () => {
   const [theme, setTheme] = useState('light');

   useEffect(() => {
      const init = localStorage.getItem('theme');
      if (init) setTheme(init);
   }, [])

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
   }, [theme])

   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   return (
      <HeaderElement>
         <Container>
            <Nav>
               <Logo>
                  Where is the world?
               </Logo>
               <ThemeToggler onClick={toggleTheme}>
                  {theme === 'light'
                     ? <Moon className="icon" />
                     : <MoonFill className="icon" />}
                  <Typography>
                     {theme}
                  </Typography>
               </ThemeToggler>
            </Nav>
         </Container>
      </HeaderElement>
   )
}

export default Header
