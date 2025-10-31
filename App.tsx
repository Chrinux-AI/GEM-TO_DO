
import React, { useState, useMemo, useCallback } from 'react';
import { initialMonths } from './data/tasks';
import type { Month } from './types';
import Header from './components/Header';
import MonthCard from './components/MonthCard';

const App: React.FC = () => {
  const [months, setMonths] = useState<Month[]>(initialMonths);

  const handleToggleTask = useCallback((taskId: string) => {
    setMonths(prevMonths =>
      prevMonths.map(month => ({
        ...month,
        tasks: month.tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      }))
    );
  }, []);

  const { totalTasks, completedTasks } = useMemo(() => {
    let total = 0;
    let completed = 0;
    months.forEach(month => {
      total += month.tasks.length;
      completed += month.tasks.filter(task => task.completed).length;
    });
    return { totalTasks: total, completedTasks: completed };
  }, [months]);

  const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="my-8 p-6 bg-slate-800 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">Overall Progress</h2>
          <div className="flex items-center gap-4">
            <div className="w-full bg-slate-700 rounded-full h-4">
              <div
                className="bg-cyan-500 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <span className="text-lg font-semibold text-cyan-400">{completedTasks} / {totalTasks}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {months.map(month => (
            <MonthCard key={month.name} month={month} onToggleTask={handleToggleTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
