import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerError = styled.section`
    display: flex;
    flex-direction:column;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
`;

export const MsgError = styled.p`
    color: #cccccc;
    font-size:1.2rem;
`;

export const HeaderContainer = styled.section`
    display:flex;
    padding: 2rem 3rem;
    gap: 2rem;
    width:100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(18, 18, 18, 0.8)), url(${(props) => props.$url}) center center / cover no-repeat;
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
     }
`;

export const ImageMovie = styled.img`
    width:17rem;
    height:26rem;
    border-radius:1rem;
    box-shadow: 0 0 15px rgba(77, 166, 255, 0.6);
    transition: 0.3s;
    
    &:hover{
      filter: saturate(2);
    }
`;

export const Title = styled.h1`
    font-size:2.5rem;
`;

export const Info = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.3rem;
`;

export const Container = styled.section`
    display:flex;
    justify-content:center;
`;

export const ContainerDetails = styled.section`
    width:70%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding: 2rem 3rem;

    @media (max-width: 768px) {
        width:100%;
     }
`;

export const TagLine = styled.p`
    font-size:1.3rem;
`;

export const HeaderInfo = styled.section`
    width:100%;    
    display:flex;
    flex-direction:column;
    gap:2.5rem;

    @media (max-width: 768px) {
        gap:1rem;
  }
`;

export const ButtonBack = styled(NavLink)`
    width:5rem;    
    padding: 0.8rem 1rem;
    border:none;
    border-radius: 5px;
    text-decoration: none;
    text-align:center;
    color:#fff;
    background-color: rgb(53, 105, 160);
    
    &:hover{
        background-color: rgb(25, 50, 77);
    }
`;

export const FavoriteIcon = styled.img`
    width:2.5rem;
    height:2.5rem;
    background-color: rgba(25, 50, 77,0.6);
    border-radius:50%;
    padding:0.3rem;
    cursor:pointer;
    box-shadow: 0px 0px 2px rgb(255, 255, 255);

    &:hover{
        background-color: rgba(25, 50, 77,0.8);
        box-shadow: 0px 0px 5px rgb(255, 255, 255);
    }
`;

export const HeaderTitle = styled.div`
    display:flex;
    gap:1rem;
    justify-content:start;
    align-items:center;
`;

export const SinopseTitle = styled.h2`
    color:#e84f4f;
`;

export const SinopseText = styled.p`
    color: #cccccc;
    font-size:1.2rem;    
`;