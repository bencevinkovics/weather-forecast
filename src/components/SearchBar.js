import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
width: 85%;
height: 95%;
border: 0;
border-radius: 15px;
cursor: pointer;
padding-left: 15px;
    &:focus {
        outline: none;
    }
`;

const Div = styled.form`
    width: 98%;
    height: 5%;
    background: rgba(255, 255, 255);
    border: 0;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;

`;

const Button = styled.button`
    background: none;
    border: 1px solid #b0b0b0;
    color: #b0b0b0;
    border-radius 15px;
    cursor: pointer;
        &:hover{
            background: #b0b0b0 ;
            color: white;   
        }
`;

const SearchBar = ({ getWeather }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Div onSubmit={onSubmit}>
            <Input
                type='text'
                placeholder='Search city...'
                onChange={e => setText(e.target.value)}
            />
            <Button onClick={() => getWeather(text)}>Search</Button>
        </Div>
    );
}

export default SearchBar