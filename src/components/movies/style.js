import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-wrap:wrap;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
`;

export const Card = styled.div`  
    width:250px;  
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: stretch;
    transition: 0.3s;

    &:hover{
      transform: translateY(-0.4rem);
      filter: saturate(2);
    }
`;

export const Title = styled.h2`
    max-width: 400px;        
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:1rem;
`;

export const ImageMovie = styled.img`
    height:400px;
    margin-top: -1.6rem;
    border-radius: 5px 5px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Info = styled.div` 
    width:100%;    
    display: flex;
    flex-direction:column;
    justify-content: start;
    gap:0.5rem;
    padding: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0 0 5px 5px;
`;

export const Link = styled(NavLink)` 
    width:100%;    
    padding: 0.8rem 1rem;
    background-color: rgba(77, 166, 255, 0.4);
    border:none;
    border-radius: 5px;
    text-decoration: none;
    text-align:center;
    color:#fff;
    &:hover{
    background-color: rgba(77, 166, 255, 0.6);
    }
`;

export const ReleaseDate = styled.h3` 
    color: #777777;
    font-size:0.8rem;
`;

export const ScoreMovie = styled.span`
    position:relative;
    left:0.5rem;
    top:1rem;
    width:fit-content;
    display: flex;
    align-items:center;
    justify-content: center;
    gap:0.3rem;
    border-radius:1rem;
    color: #ffee00;
    padding: 0.3rem 0.7rem;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const VoteMovie = styled.span`
    font-size:0.8rem;
`;

export const StarIcon = styled.img`
    width:0.9rem;
`;