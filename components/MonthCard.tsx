
import React, { useMemo } from 'react';
import type { Month } from '../types';
import TaskItem from './TaskItem';

interface MonthCardProps {
  month: Month;
  onToggleTask: (taskId: string) => void;
}

const MonthCard: React.FC<MonthCardProps> = ({ month, onToggleTask }) => {
  const { completedCount, totalCount, progress } = useMemo(() => {
    const total = month.tasks.length;
    if (total === 0) return { completedCount: 0, totalCount: 0, progress: 0 };
    const completed = month.tasks.filter(task => task.completed).length;
    return {
      completedCount: completed,
      totalCount: total,
      progress: (completed / total) * 100,
    };
  }, [month.tasks]);

  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{month.name}</h3>
          <p className="text-sm text-cyan-400">{month.theme}</p>
        </div>
        <span className="text-sm font-semibold text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
          {completedCount} / {totalCount}
        </span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="overflow-y-auto flex-grow pr-2 -mr-2" style={{ maxHeight: '400px' }}>
        <ul className="space-y-3">
          {month.tasks.map((task, index) => (
             <TaskItem key={task.id} task={task} day={index + 1} onToggleTask={onToggleTask} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MonthCard;
