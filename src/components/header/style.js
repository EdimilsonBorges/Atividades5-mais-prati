import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    background-color: #121212;
    padding: 0.8rem 3rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled(NavLink)`
    color: #e0e0e0;
    text-shadow: 0 0 5px rgba(77, 166, 255, 0.4), 0 0 10px rgba(77, 166, 255, 0.4), 0 0 15px rgba(77, 166, 255, 0.4), 0 0 20px rgba(77, 166, 255, 0.4);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    font-size:1.5rem;
`;

export const Ul = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   gap:0.5rem;
   list-style-type:none;
   height:100%;
`;

export const Link = styled(NavLink)`
    color: #e0e0e0;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;

     &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        color: #4da6ff;
        box-shadow: 0 0 8px rgba(77, 166, 255, 0.4);
  }
`;