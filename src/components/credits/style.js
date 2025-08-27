import styled from 'styled-components';

export const TitleCredit = styled.h2`
    font-size:1.5rem;
    color:#e84f4f;
`;

export const Credit = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap:0.5rem;
    align-items:center;
    justify-content:center;
`;

export const ImageCredit = styled.img`
    height:15rem;
    border-radius: 1rem;
`;

export const NameCredit = styled.h3`
    font-size:1.1rem;

`;

export const FunctionCredit = styled.h4`
    font-size:0.9rem;
    color: #999999;

`;