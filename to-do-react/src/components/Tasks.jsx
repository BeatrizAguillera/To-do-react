import Task from './Task'

const Tasks = ({tasks, onDelete, onToggleReminder, onToggleCompleted }) => {

  return (
    <>
        {tasks.map((task) => (<Task key={task.id} task={task}
        onDelete={onDelete}
        onToggleReminder={onToggleReminder}
        onToggleCompleted={onToggleCompleted}
         />))}
        
    </>
  )
}

export default Tasks