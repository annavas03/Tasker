import {type ITask} from './task.ts'

export const Column = [
    { id: 'todo', title: 'To Do'},
    { id: 'in_progress', title: 'In progress' },
    { id: 'on-hold', title: 'On hold' },
    { id: 'done', title: 'Done' },
    ]

export interface IColumn {
    id: string;
    title: string;
    tasks: ITask[];

}