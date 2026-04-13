import type {ITask} from "../constants/task.ts";

export const getSortedTasks = (tasks: ITask[], status: string) => {
    return tasks
        .filter(task => task.status === status)
        .sort((a, b) => new Date (a.deadline).getTime() - new Date(b.deadline).getTime());
}