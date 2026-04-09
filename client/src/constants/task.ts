
export type TaskStatus = 'todo'|'in_progress' |'done'

export interface ITask {
    id: string;
    title: string;
    description?: string;
    deadline: string;
    status: TaskStatus;
    isPriority: boolean;
}