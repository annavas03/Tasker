import '../styles/dashboard.css'
//import {useState} from "react";
//import {User} from '../constants/types.ts';


const Dashboard: React.FC = () => {

    const user ={
        firstName: 'Anna',
        lastName: 'Vasylenko',
    }
    //const [user, setUser] = useState<User | null>(null)


    return(
        <div className="main-container">
            <header>
                <div className="header-container">
                    {user ? (
                        <h1>Hi, {user?.firstName} {user?.lastName}</h1>
                    ) : (
                        <>
                            <h1>Welcome to Tasker!</h1>
                            <p>Please log in or register to manage your tasks.</p>
                        </>
                    )}
                    <p>Let's finish your task today!</p>
                </div>
               <div className="user-area">
                   <button
                   type="button">
                       <img src={'public/assets/notif.svg'} alt="notification" />
                   </button>
                   {/*{user?.isLoggined ? (
                       <img src={user.avatar} alt="avatar" />
                       ) : (
                       <img src={'assets/userEmpty.svg'} alt="userEmpty"/>
                   )}*/}
                   <button>
                       <img src={'assets/userEmpty.svg'} alt="userEmpty"/>
                   </button>
               </div>
            </header>
            <main>
                <p>тут буде бфльше контенту потім</p>
            </main>
        </div>
    )
}

export default Dashboard;