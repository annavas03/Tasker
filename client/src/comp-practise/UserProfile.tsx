import {useState, useEffect} from "react";
import React from "react";

interface User{
    name:{
        first: string,
        last: string,
    };
    email: string;
    picture: {
        large: string;
    };
}

const UserProfile: React.FC = () =>{
    const [user,setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error,setError] = useState<string | null>(null)

    const fetchUserData = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setUser(data.results[0]);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch user data");
            setLoading(false);
        }
    };
    // useEffect — це один з хуків (hooks) в React, який дозволяє вам виконувати ефекти (side effects) в функціональних компонентах.
    // Ефектами вважаються будь-які асинхронні операції, такі як запити до серверу, маніпуляція з DOM, підписка на події тощо.
    //*Призначення хука useEffect:
    // useEffect дозволяє вам управляти ефектами в компоненті без використання класових методів, таких як componentDidMount, componentDidUpdate або componentWillUnmount.
    //*Як використовувати useEffect:
    // Цей хук приймає два параметри:
    // Функція ефекту — це функція, яка виконується після рендерингу компонента. Всередині цієї функції можна писати код для ефектів.
    // *Масив залежностей (опціональний) — це масив змінних, які повинні змінитися, щоб ефект знову спрацював.
    // Якщо масив порожній, ефект спрацює тільки один раз після першого рендерингу компонента.
   useEffect(() => {
        const intervalId = setInterval(() => {
            fetchUserData();
        }, 2000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    if (loading) return (
        <p>Loading data . . . </p>)
    if (error) return ( <p>{error}</p>)
    return (
        <>
            <h1>UserProfile</h1>
                {user && (
                    <>
                        <img src={user.picture.large} alt='user image' />
                        <h3> {`${user.name.first} ${user.name.last}`}</h3>
                        <h2>{`${user.email}`}</h2>
                    </>)}
        </>
    )

}

export default UserProfile;