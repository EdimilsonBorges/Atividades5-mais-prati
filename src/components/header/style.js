import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    background-color: #121212;
    padding: 1rem;
    display: flex;
    justify-content: end;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Ul = styled.ul`
   display: flex;
   gap:15px;
   list-style-type:none;
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