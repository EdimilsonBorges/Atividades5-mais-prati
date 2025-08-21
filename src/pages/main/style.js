import styled from 'styled-components';

export const Container = styled.main`
     
`;

export const Loader = styled.div`
    padding-top: 3rem;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    gap:0.5rem;
`;

export const Spinner = styled.div`
    width: 56px;
    height: 56px;
    display: grid;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-right-color: rgb(77, 166, 255);
    animation: spinner-a4dj62 1s infinite linear;

    &::before,
    &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
    animation: spinner-a4dj62 2s infinite;
    }

    &::after {
    margin: 8.9px;
    animation-duration: 3s;
    }

    @keyframes spinner-a4dj62 {
        100% {
            transform: rotate(1turn);
        }
    }
`;