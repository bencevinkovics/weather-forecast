import { useState } from 'react';
import '../styles/LeftContainer.css'

const SearchBar = ({ getWeather, screenSize }) => {
    const [text, setText] = useState('');
    const inputClass = `inputStyle${screenSize}`;

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className='formStyle' onSubmit={onSubmit}>
            <input
                className={inputClass}
                type='text'
                placeholder='Search city...'
                onChange={e => setText(e.target.value)}
            />
            <button className='buttonStyle' onClick={() => getWeather(text)}>Search</button>
        </form>
    );
}

export default SearchBar