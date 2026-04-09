import React, {useState, type ChangeEvent} from 'react';

const Form: React.FC = () => {
const [ inputValue, setInputValue ] = useState('');

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
}

    return (
        <form>
            <input type='text' value={inputValue} onChange={handleChange} />
            <p>Наш інпут: {inputValue}</p>
        </form>
    )
}

export default Form;