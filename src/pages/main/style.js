import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction:column;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;
`;

export const TitleCards = styled.h1`
    padding:1rem;
    color: rgb(77, 166, 255);
    font-size: 1.5rem;
`;

export const ResultsText = styled.p`
    padding:1rem;
    color: #fff;
    font-size: 1.3rem;
`;

export const EndPage = styled.div`
    color: #e84f4f;
    font-size: 2rem;
    padding: 2rem;
    width:80%;
    border: 1px solid #e84f4f;
    text-align:center;
`;

export const SectionSearch = styled.section`
    width:100%;
    background-color: #181818;
    padding:0 1rem;
`;

export const FormSearch = styled.form`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    max-width: 500px;
    background: #1f1f1f;
    padding: 0.5rem;
    border-radius: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const Search = styled.input`
    width:100%;
    flex: 1;
    padding: 0.74rem 1.2rem;
    border: none;
    border-radius: 50px 0px 0px 50px;
    outline: none;
    font-size: 1rem;
    background: #2a2a2a;
    color: #fff;
    transition: all 0.3s ease;

    &::placeholder {
        color: #aaa;
    }
    &:focus {
        background: #333;
        box-shadow: 0 0 0 2px inset rgba(77, 166, 255,0.5);
}
`;

export const ButtonSearch = styled.button`
    width:30%;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 0px 50px 50px 0px;
    background: linear-gradient(135deg, rgba(77, 166, 255,0.5), rgba(77, 166, 255,0.7));
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, rgba(77, 166, 255,0.7), rgba(77, 166, 255,0.5));
        box-shadow: 0 4px 12px rgba(77, 166, 255,0.2);
}
`;