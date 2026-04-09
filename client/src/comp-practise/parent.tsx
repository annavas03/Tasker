/*
import React, {useState} from 'react';
import Child from './child';
const Parent: React.FC = () =>{

    const [nameProp, setNameProps] = useState('');
    const [inputName, setInputName] = useState<string>('');
    const [ageProp, setAgeProps] = useState<number>(0);
    const [inputAge, setInputAge] = useState<number>(0);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    };
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAge(e.target.value);
    }

    const updateName = () => {
        setNameProps(inputName);
    };
    const updateAge = () => {
        setAgeProps(inputAge)
    }

    return (
        <div>
            <h1>Parent</h1>

            <input
                type="text"
                className = 'input-text'
                value={inputName}
                onChange={handleNameChange}
                placeholder="New Name"
            />
            <button type="button" className="button" onClick={updateName}>
                Надати ім'я
            </button>

            <input
                type="number"
                value={inputAge}
                onChange={handleAgeChange}
                placeholder="New Age"
            />

            <button type="button" className="button" onClick={updateAge}>Change Age</button>

            <Child name={nameProp} age={ageProp} />
        </div>
    )
}

export default Parent;*/
