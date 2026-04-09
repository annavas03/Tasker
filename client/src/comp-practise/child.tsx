import React from 'react';

interface ChildProps {
    name: string;
    age: number;
}

//спосіб з деструктуризацією

const Child: React.FC<ChildProps> = ({name, age}) =>{

    return (
        <div>
            <h1>Child</h1>
            <p> Name: {name}</p>
            <p> Age: {age} </p>
        </div>
    )
}

export default Child;


//перший спосіб
// const Child: React.FC<ChildProps> = (props) =>{
//
//     return (
//         <div>
//             <h1>Child</h1>
//             <p> Name: {props.name}</p>
//             <p> Age: {props.age} </p>
//         </div>
//     )
// }