import { useState } from "react"

const AddChecklistItem = ({ onAdd }) => {
    const [name, setName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a checklist item')
            return
        }

        onAdd({ name })

        setName('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Checklist item</label>
                <input type="text" placeholder="Add a checklist item" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <input type="submit" value="Save checklist item" className="btn btn-block" />
        </form>
    )
}

export default AddChecklistItem