import { useRef, useState } from 'react';
import { ActionArea, AddButton, CancelButton, InputBoard, SaveButton } from './styles';

const AddColumn = (props) => {
  const [showNewColumnButton, setShowNewColumnButton] = useState(true);
  const inputBoard = useRef(null);
  const [value, setValue] = useState('');

  const handleInputFinish = () => {
    setShowNewColumnButton(true);
    addNewColumn(value);
    setValue('');
  };

  const handleCancel = () => {
    setShowNewColumnButton(true);
    setValue('');
  };

  function addNewColumn(title) {
    const newColumnOrder = Array.from(props.board.columnOrder);
    const newColumnId = 'column-' + Math.floor(Math.random() * 100000);
    newColumnOrder.push(newColumnId);

    const newColumn = {
      id: newColumnId,
      title: title,
      taskIds: [],
    };

    props.setBoard({
      ...props.board,
      columns: {
        ...props.board.columns,
        [newColumnId]: newColumn,
      },
      columnOrder: newColumnOrder,
    });
  }

  return (
    <>
      {showNewColumnButton ? (
        <AddButton
          type="button"
          onClick={() => {
            setShowNewColumnButton(false);
          }}>
          Add new Column
        </AddButton>
      ) : (
        <ActionArea>
          <InputBoard
            autoFocus
            type="text"
            placeholder="What is the title of your board?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputBoard}
          />
          <CancelButton type="button" onClick={() => handleCancel()}>
            Cancel
          </CancelButton>
          <SaveButton type="button" onClick={() => handleInputFinish()} disabled={value === ''}>
            Save
          </SaveButton>
        </ActionArea>
      )}
    </>
  );
};

export default AddColumn;
