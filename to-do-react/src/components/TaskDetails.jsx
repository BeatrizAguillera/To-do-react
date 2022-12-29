import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

function TaskDetails() {
    // const [loading, setLoading] = useState(false)
    const [task, setTask] = useState({})

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if(res.status === 404) {
                navigate('/')
            }

            setTask(data)
            // setLoading(false)
        }

        fetchTask()
    })

    return (<>
            <div className="btn">
                <Button text="Go Back" onClick={() => navigate("/")}></Button>
            </div>
            <div className="task-details container">
                <h2>{task.title}</h2>
                <p>{task.details}</p>
            </div>
        </>);
}

export default TaskDetails