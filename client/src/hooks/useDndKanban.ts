import React from 'react';
import { type DragEndEvent } from "@dnd-kit/react";
import { type ITask, type TaskStatus} from "../constants/task.ts";

export const useKanbanDnd = (
    _tasks: ITask[],
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {

    const handleDragEnd = ({ operation, canceled }: Parameters<DragEndEvent>[0]) => {
        if (canceled || !operation.target) return;

        const activeId = operation.source?.id as string;
        const targetColumnStatus = operation.target.id as TaskStatus;

        if (targetColumnStatus && activeId) {
            setTasks((prevTasks) =>
                prevTasks.map(task =>
                    task.id === activeId
                        ? { ...task, status: targetColumnStatus }
                        : task
                )
            );
        }
    };

    return { handleDragEnd };
};