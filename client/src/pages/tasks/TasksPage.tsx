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
import {getSortedTasks} from "../../utils/taskUtils.ts";
import Modal from "../../components/Modal.tsx";
import AddTask from "./add-task-module/AddTask.tsx";
import '../../styles/tasks.css'

export const TasksPage: React.FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: '1',
            title: 'Learn React',
            status: 'on-hold',
            deadline: '2026-03-20',
            description: 'Вивчити основні хуки: useState, useEffect, useContext та useRef. Також розібратися з роботою Virtual DOM.'
        },
        {
            id: '2',
            title: 'Написати боард',
            status: 'in_progress',
            deadline: '2026-04-14',
            description: 'Реалізувати функціонал Drag-and-Drop за допомогою бібліотеки @dnd-kit/react. Потрібно налаштувати сенсори, обробку подій завершення перетягування та додати анімацію "хитання" для колонок.'
        },
        {
            id: '3',
            title: 'Пити каву',
            status: 'done',
            deadline: '2026-03-24',
            description: 'Просто релакс.'
        },
        {
            id: '4',
            title: 'Тест довгих слів',
            status: 'todo',
            deadline: '2026-04-16',
            description: 'Перевірка перенесення довжелезнихсліввсерединіконтейнера: дезоксирибонуклеїновакислота та найдовшесловоунімецькіймові Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz.'
        },
        {
            id: '5',
            title: 'Багатостроковий опис',
            status: 'in_progress',
            deadline: '2026-05-10',
            description: 'Перше речення.\nДруге речення після переносу.\n\nТретій абзац для перевірки вертикальних відступів у картці.'
        }
    ]);

    const [isDoneOpen, setDoneOpen] = useState<boolean>(false);
    const doneColumnTitle = columnsSchema.find(col=> col.id === 'done')
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const {handleDragEnd} = useKanbanDnd(tasks, setTasks);

    const handleSaveNewTask = (taskData: Omit<ITask, 'id'>) => {
        const newTask:ITask = {
            ...taskData,
            id: crypto.randomUUID() //генерація унікального id
        };
        setTasks(prev => [...prev, newTask]);
        setModalOpen(false);
    }

    return (
        <div className="board-container">
            <div className="add-task">
                <h1>Tasks</h1>
                <button className='add-icon' onClick={() => setModalOpen(true)}>
                    <img src={'/assets/add-icon.svg'} alt="add task" />
                </button>
            </div>
            <DragDropProvider onDragEnd={handleDragEnd}>
                <div className={`task-columns-container ${isDoneOpen ? 'with-scroll' : ''}`}>
                    <div className='task-columns'>
                        {columnsSchema.map((column) => {
                            {/*Done рендерим якщо він true*/}
                            if (column.id === 'done'&& !isDoneOpen) return null;
                            return (
                                <div
                                    key={column.id}
                                    className={`column-wrapper ${column.id === 'done' ? 'done-active' : ''}`}
                                    onClick={() => {
                                        if (column.id === 'done' && isDoneOpen) setDoneOpen(false);
                                    }}
                                    >
                                    <ColumnComponent
                                        key={column.id}
                                        id={column.id}
                                        title={column.title}
                                        tasks={getSortedTasks(tasks, column.id)}
                                    />
                                </div>
                            );
                        })}
                        {!isDoneOpen && (
                            <div className="done-tab" onClick={() => setDoneOpen(true)}>
                                <span>{doneColumnTitle?.title}</span>
                            </div>
                        )}
                    </div>
                </div>
            </DragDropProvider>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Створити нове завдання"
            >
                <AddTask onSave={handleSaveNewTask} />
            </Modal>
        </div>
    );
};