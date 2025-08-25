import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display:flex;
    padding: 2rem 3rem;
    gap: 2rem;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(18, 18, 18, 0.8)), url(${(props) => props.$url}) center center / cover no-repeat;
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
`;

export const Container = styled.section`
    display:flex;
    padding: 2rem 3rem;
    justify-content:center;
`;

export const ContainerDetails = styled.section`
    display:flex;
    flex-direction:column;
    max-width:60rem;
    justify-content:center;
    padding: 2rem 3rem;
`;