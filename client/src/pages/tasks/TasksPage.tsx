//Завантажує дані з БД
//"Головний мозок". Він стежить, коли щось почали тягнути і куди його кинули.
//DND Context

import React, {useState} from "react";
import '../../styles/tasks.css'
import { DragDropProvider } from "@dnd-kit/react";
import {TaskColumn as ColumnComponent} from "./TaskColumn.tsx";
import { Column as columnsSchema } from "../../constants/kanban.ts";
import {type ITask} from "../../constants/task.ts";
import {useKanbanDnd} from "../../hooks/useDndKanban.ts";
import '../../styles/tasks.css'

export const TasksPage: React.FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: '1',
            title: 'Вивчити React',
            status: 'todo',
            deadline: '2026-03-20',
            isPriority: false,
            description: ''
        },
        {
            id: '2',
            title: 'Написати боард',
            status: 'in_progress',
            deadline: '2026-04-01',
            isPriority: true,
            description: ''
        },
        {
            id: '3',
            title: 'Пити каву',
            status: 'done',
            deadline: '2026-03-24',
            isPriority: false,
            description: ''
        },
    ]);

    const {handleDragEnd} = useKanbanDnd(tasks, setTasks);

    const togglePriority = (id: string) => {
        setTasks((prev) =>
            prev.map(task =>
                task.id === id ? { ...task, isPriority: !task.isPriority } : task
            )
        );
    };

    return (
        <div className="board-container">
            <div className="add_task">
                <h1>Tasks</h1>
                <button className='add-icon'>
                    <img src={'/assets/add-icon.svg'} alt="add task" />
                </button>
            </div>
            <DragDropProvider onDragEnd={handleDragEnd}>
                <div className='task-columns'>
                    {columnsSchema.map((column) => (
                        <ColumnComponent
                            key={column.id}
                            id={column.id}
                            title={column.title}
                            tasks={tasks.filter(task => task.status === column.id)}
                            onTogglePriority={togglePriority}
                        />
                    ))}
                </div>
            </DragDropProvider>
        </div>
    );
};