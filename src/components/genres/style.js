import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
`;

export const Genre = styled.span`
    padding: 0.3rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius:0.5rem;
    cursor:default;
    background-color: #e84f4f;
    
    &:hover{
        background-color: #762626;
    }
`;