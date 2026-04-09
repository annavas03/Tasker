import './App.css'
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Dashboard from "./pages/Dashboard";
import {TasksPage} from "./pages/tasks/TasksPage.tsx";

function App() {
    return (
        <div className="app-layout">
            <Sidebar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/tasks" element={<TasksPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;