import { useState } from 'react';
import {
  ActionArea,
  AddButton,
  AddTaskFormWrapper,
  CancelButton,
  DescriptionArea,
  SaveButton,
  TitleInput,
} from './styles';

const AddTask = (props) => {
  const [showNewTaskButton, setShowNewTaskButton] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleInputFinish = () => {
    setShowNewTaskButton(true);
    addNewTask(props.columnId, title, description);
    setTitle('');
    setDescription('');
  };

  const handleCancel = () => {
    setShowNewTaskButton(true);
    setTitle('');
    setDescription('');
  };

  const addNewTask = (columnId, title, description) => {
    const newTaskId = 'task-' + Math.floor(Math.random() * 100000);
    const column = props.board.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.push(newTaskId);

    const newTask = {
      id: newTaskId,
      title: title,
      description: description,
    };

    props.setBoard({
      ...props.board,
      tasks: {
        ...props.board.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...props.board.columns,
        [columnId]: {
          ...props.board.columns[columnId],
          taskIds: newTaskIds,
        },
      },
    });
  };

  return (
    <>
      {showNewTaskButton ? (
        <AddButton onClick={() => setShowNewTaskButton(false)} type="button">
          Add new Task
        </AddButton>
      ) : (
        <AddTaskFormWrapper>
          <TitleInput
            type="text"
            placeholder="Title of your new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DescriptionArea
            rows={5}
            type="textarea"
            placeholder="describe your new task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ActionArea>
            <CancelButton onClick={() => handleCancel()} type="button">
              Cancel
            </CancelButton>
            <SaveButton onClick={() => handleInputFinish()} disabled={title === ''} type="button">
              Save
            </SaveButton>
          </ActionArea>
        </AddTaskFormWrapper>
      )}
    </>
  );
};

export default AddTask;
