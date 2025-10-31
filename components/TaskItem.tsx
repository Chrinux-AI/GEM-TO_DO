
import React from 'react';
import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
  day: number;
  onToggleTask: (taskId: string) => void;
}

const getCategoryClasses = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'logic':
      return 'bg-blue-200 text-blue-800';
    case 'web':
      return 'bg-green-200 text-green-800';
    case 'cyber hygiene':
      return 'bg-red-200 text-red-800';
    case 'command line':
      return 'bg-gray-300 text-gray-800';
    case 'debug mind':
      return 'bg-yellow-200 text-yellow-800';
    case 'network':
      return 'bg-purple-200 text-purple-800';
    case 'reflection':
      return 'bg-indigo-200 text-indigo-800';
    default:
      return 'bg-slate-200 text-slate-800';
  }
};

const TaskItem: React.FC<TaskItemProps> = ({ task, day, onToggleTask }) => {
  const categoryClasses = getCategoryClasses(task.category);

  return (
    <li className="flex items-start space-x-3 p-2 rounded-md hover:bg-slate-700/50 transition-colors duration-200">
      <input
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="mt-1 h-5 w-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-2 focus:ring-cyan-500 cursor-pointer flex-shrink-0"
      />
      <label htmlFor={task.id} className="flex flex-col cursor-pointer w-full">
        <div className="flex items-center justify-between">
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${categoryClasses}`}>
                {task.category}
            </span>
             <span className="text-xs font-mono text-slate-500">Day {day}</span>
        </div>
        <p className={`mt-1 text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}>
          {task.description}
        </p>
      </label>
    </li>
  );
};

export default TaskItem;
