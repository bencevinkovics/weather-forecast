import { useState } from 'react';
import '../styles/LeftContainer.css'

const SearchBar = ({ getWeather }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className='formStyle' onSubmit={onSubmit}>
            <input
                className='inputStyle'
                type='text'
                placeholder='Search city...'
                onChange={e => setText(e.target.value)}
            />
            <button className='buttonStyle' onClick={() => getWeather(text)}>Search</button>
        </form>
    );
}

export default SearchBar