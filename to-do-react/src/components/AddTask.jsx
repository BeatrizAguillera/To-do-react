import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a task')
            return
        }

        onAdd({ title, details, reminder })

        setTitle('')
        setDetails('')
        setReminder(false)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Details</label>
                <input type="text" placeholder='Add some Details' value={details} onChange={(e) => setDetails(e.target.value)}/>
            </div>            
            <div className="form-control form-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask