//Просто відображає дані однієї таски.
import {type FC} from 'react';
import {getDeadlineStatus} from "../../utils/dateUtils.ts";
import {useDraggable} from "@dnd-kit/react";
import type {ITask} from "../../constants/task";

interface TaskCardProps {
    task: ITask,
}

export const TaskCard: FC<TaskCardProps> = ({task}) => {

    const {status, label} = getDeadlineStatus(task.deadline);

    const isOverdue = status === 'overdue';

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
            className={`task-card ${isOverdue ? 'overdue-red' : ''}`}
            {...draggable}
        >
            <div className='task-card-header'>
                <h4>{task.title}</h4>
            </div>
            <div className='task-description'>
                <p>{task.description}</p>
            </div>
            <div className="task-card-footer">
                <span className={`deadline-status ${status}`}>
                    {label}
                </span>
            </div>
        </div>
    )
}