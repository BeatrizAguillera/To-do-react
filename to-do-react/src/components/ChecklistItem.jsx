import { FaCheckSquare, FaRegCheckSquare, FaRegTimesCircle, FaTimesCircle } from "react-icons/fa";

const ChecklistItem = ({ checklistItem }) => {

    return (
      <div className="checklistItens-container">
        <FaRegCheckSquare className="checklist-icon" />
        <h5
          className={`checklistItem ${
            checklistItem.completed && "checked-ChecklistItem"
          }`}
        >
          {checklistItem.name}
        </h5>
        <FaRegTimesCircle className="checklist-icon" />
      </div>
    );
}

export default ChecklistItem
