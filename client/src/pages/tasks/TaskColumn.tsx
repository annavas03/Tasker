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
    onTogglePriority: (id: string) => void;
}

export const TaskColumn:FC<IColumnProps> = ({ id, title, tasks, onTogglePriority}) =>{

    /*
     setNodeRef — це мітка, яку ми повісимо на div, щоб бібліотека його бачила
     isOver — це лампочка: вона світиться (true), коли ми тримаємо таску над цією колонкою
    */

    const { ref, isDropTarget } = useDroppable({ id: id });

    const columnClassName = `column-content ${isDropTarget ? "is-over" : ""}`;

    return (
        <div className={`column-wrapper ${id}`}>
            <h3 className="column-title">
                {title}
                <span className="task-count">{tasks.length}</span>
            </h3>

            <div ref={ref} className={columnClassName}>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onTogglePriority={onTogglePriority}
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