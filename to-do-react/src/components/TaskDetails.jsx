import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div className="btn">
                <Button text="Go Back" onClick={() => navigate("/")}></Button>
            </div>
            <div className="task-details container">
                <h2>{params.taskTitle}</h2>
                <p></p>
            </div>
        </>
    );
}

export default TaskDetails