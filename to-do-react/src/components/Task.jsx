import { FaCheck, FaExclamation, FaInfo, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChecklistItens from './ChecklistItens';

const Task = ({ task, onDelete, onToggleReminder , onToggleCompleted }) => {
      const [checklistItens, setChecklistItens] = useState([
        { id: 1, name: "aaaaaaaaaaaaaa", completed: false },
        { id: 2, name: "bbbbbbbbbbbbbbbbbbbb", completed: false },
        { id: 3, name: "ccccccccccccccccccccccccccccccccccc", completed: false },
      ]);
    
    const navigate = useNavigate();


    return (
      <div
        className={`task-container ${task.reminder && "reminder"} ${
          task.completed && "completed"
        }`}
      >
        <div className="task">
          <h3>{task.title}</h3>
          {task.details && <p>{task.details}</p>}
          <ChecklistItens checklistItens={checklistItens} />
        </div>

        <div className="icons-container">
          <FaExclamation
            className="icon"
            onClick={() => onToggleReminder(task.id)}
          />
          <FaTimes className="icon" onClick={() => onDelete(task.id)} />
          <FaCheck
            className="icon"
            onClick={() => onToggleCompleted(task.id)}
          />
          <FaInfo
            className="icon"
            onClick={() => navigate("/tasks/" + task.id)}
          />
        </div>
      </div>
    ); 
}

export default Task