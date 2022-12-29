import ChecklistItem from './ChecklistItem'

const ChecklistItens = ({ checklistItens }) => {
    return (
      <>
        {checklistItens.map((checklistItem) => (
          <ChecklistItem key={checklistItem.id} checklistItem={checklistItem} />
        ))}
      </>
    );
}

export default ChecklistItens