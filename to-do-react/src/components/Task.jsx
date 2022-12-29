import { FaCheck, FaExclamation, FaInfo, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Task = ({ task, onDelete, onToggleReminder , onToggleCompleted }) => {
    const navigate = useNavigate();

    // const handleTaskDetailsClick = () => {
    //     navigate(`/${task.title}`)
    // }
    return (
        <div className={`task ${task.reminder && 'reminder'} ${task.completed && 'completed'}`}>
            <h3>{task.title}</h3>
            <p>{task.details}</p>

        <div className='icons-container'>
            <FaExclamation className='icon' onClick={() => onToggleReminder(task.id)} />
            <FaTimes className='icon' onClick={() => onDelete(task.id)} />
            <FaCheck className='icon' onClick={() => onToggleCompleted(task.id)} />
            <FaInfo className='icon' onClick={() => navigate("/tasks/"+task.id)}/>
        </div>
        </div> 
    ) 
}

export default Task