import { Task } from '../types';

const priorityColors = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
};

const statusColors = {
  todo: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
};

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (status: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }: Props) {
  const nextStatus = task.status === 'todo' ? 'in_progress' : task.status === 'in_progress' ? 'done' : 'todo';
  const nextLabel = task.status === 'todo' ? 'Start' : task.status === 'in_progress' ? 'Complete' : 'Reopen';

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900 flex-1 pr-2">{task.title}</h3>
        <div className="flex gap-1">
          <button onClick={onEdit} className="p-1 text-gray-400 hover:text-blue-500 transition-colors text-sm">✏️</button>
          <button onClick={onDelete} className="p-1 text-gray-400 hover:text-red-500 transition-colors text-sm">🗑️</button>
        </div>
      </div>

      {task.description && (
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{task.description}</p>
      )}

      <div className="flex gap-2 mb-3 flex-wrap">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[task.status]}`}>
          {task.status === 'in_progress' ? 'In Progress' : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
        </span>
      </div>

      {task.dueDate && (
        <p className="text-xs text-gray-400 mb-3">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      )}

      <button
        onClick={() => onStatusChange(nextStatus)}
        className="w-full text-sm py-1.5 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
      >
        {nextLabel}
      </button>
    </div>
  );
}
