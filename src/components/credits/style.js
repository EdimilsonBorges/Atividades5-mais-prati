import styled from 'styled-components';

export const TitleCredit = styled.h2`
    font-size:1.5rem;
    color: #e84f4f;
    @media (max-width: 768px) {
        text-align:center;
     }
`;

export const Credit = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;

    @media (max-width: 768px) {
        justify-content:center;
        align-items:center;
     }
`;

export const CardCredit = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ImageCredit = styled.img`
    width:8rem;
    border-radius: 1rem;
`;

export const NameCredit = styled.h3`       
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:1rem;
    text-align:center;
`;

export const FunctionCredit = styled.h4`
    width:7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:0.9rem;
    color: #999999;
    text-align:center;

`;