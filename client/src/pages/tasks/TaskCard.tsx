//Просто відображає дані однієї таски.
import  {type FC} from 'react';
import {getDeadlineStatus} from "../../utils/dateUtils.ts";
import starEmpty from '/assets/star-empty.svg';
import starFilled from '/assets/star-filled.svg';
import {useDraggable} from "@dnd-kit/react";
import type {ITask} from "../../constants/task";

interface TaskCardProps {
    task: ITask,
    onTogglePriority: (id:string) => void,
}

export const TaskCard: FC<TaskCardProps> = ({task, onTogglePriority}) => {

    const {status, label} = getDeadlineStatus(task.deadline);

    const { ref, draggable, isDragging } = useDraggable({
        id: task.id,
    });

    const style = {
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab'
    };

    return (
        <div
            ref={ref}
            style={style}
            className="task-card"
            {...draggable}
        >
            <div className='task-card-header'>
                <h4>{task.title}</h4>
                {task.isPriority &&
                    <button
                        className='priority-button'
                        onClick={(e) => {
                            e.stopPropagation();
                            onTogglePriority(task.id);
                        }}
                        title={task.isPriority ? 'Прибрати з важливого' : 'Зробити важливим'}
                    >
                        <img
                            src={task.isPriority ? starFilled : starEmpty}
                            alt='star'
                            className={`star-icon ${task.isPriority ? 'active' : ''}`}
                        />
                    </button>}
            </div>
            <div className="task-card-footer">
                <span className={`deadline-status ${status}`}>
                    {label}
                </span>
            </div>
        </div>
    )
}