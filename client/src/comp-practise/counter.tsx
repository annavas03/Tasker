import React, {useState} from "react";


const Counter: React.FC = () =>{

    const [count, setCount] = useState(0);

    return <>
        <p>Ми клікнули {count} разів </p>
    <button
        type="button"
        className="button"
        onClick={() =>{setCount(count + 1)}}>
        Прибавимо число
    </button>
    </>
}

export default Counter;