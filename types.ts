
export interface Task {
  id: string;
  day: number;
  category: string;
  description: string;
  completed: boolean;
}

export interface Month {
  name: string;
  theme: string;
  tasks: Task[];
}
