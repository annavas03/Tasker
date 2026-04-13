//Отримує вже готовий відфільтрований список тасок.
// Він не знає про БД, він просто каже: "Я — колонка 'In Progress', ось мої картки".

import  {type FC} from 'react';
import {useDroppable} from "@dnd-kit/react";
import {TaskCard} from "./TaskCard.tsx";
import  {type ITask} from "../../constants/task.ts";
import '../../styles/tasks.css'

interface IColumnProps {
    id: string;
    title: string;
    tasks: ITask[];
}

export const TaskColumn:FC<IColumnProps> = ({ id, title, tasks}) =>{

    /*
     setNodeRef — це мітка, яку ми повісимо на div, щоб бібліотека його бачила
     isOver — це лампочка: вона світиться (true), коли ми тримаємо таску над цією колонкою
    */

    const { ref, isDropTarget } = useDroppable({ id: id });

    const wrapperClassName = `column-wrapper ${id} ${isDropTarget ? "column-shaking" : ""}`;
    return (
        <div ref={ref} className={wrapperClassName} id='board-container'>
            <h3 className="column-title">
                {title}
                <span className="task-count">{tasks.length}</span>
            </h3>

            <div className="column-content">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                ))}

                {tasks.length === 0 && (
                    <div className="empty-placeholder">
                        <p className="empty-message">Перетягніть таску сюди</p>
                    </div>
                )}
            </div>
        </div>
    );
};