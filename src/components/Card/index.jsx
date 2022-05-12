/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import { FiTrash2, FiEye } from 'react-icons/fi';
import {
  CardButton,
  CardHeader,
  CardIndex,
  Container,
  DeleteButton,
  Description,
  Title,
} from './styles';
import Task from '../Task';

const Card = (props) => {
  const navigate = useNavigate();
  const [isModalShown, setModalShown] = useState(false);

  function deleteTask(columnId, index, taskId) {
    const column = props.board.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(index, 1);

    const tasks = props.board.tasks;
    const { [taskId]: oldTask, ...newTasks } = tasks;

    props.setBoard({
      ...props.board,
      tasks: {
        ...newTasks,
      },
      columns: {
        ...props.board.columns,
        [columnId]: {
          ...column,
          taskIds: newTaskIds,
        },
      },
    });
  }

  return (
    <li style={{ listStyle: 'none' }}>
      {isModalShown ? <Task task={props.task} setModalShown={setModalShown} /> : null}
      <Draggable draggableId={props.task.id} index={props.index} style={{ width: '100%' }}>
        {(provided) => (
          <Container
            onClick={() => {
              setModalShown(true);
              navigate(`/?taskID=${props.task.id}`);
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <CardHeader>
              <Title>{props.task.title}</Title>
              <CardButton
                onClick={(event) => {
                  setModalShown(true);
                  navigate(`/?taskID=${props.task.id}`);
                  event.stopPropagation();
                }}
                alt="View card"
                type="button">
                <FiEye />
              </CardButton>
              <DeleteButton
                type="button"
                onClick={(event) => {
                  deleteTask(props.columnId, props.index, props.task.id);
                  event.stopPropagation();
                }}
                alt="Delete card">
                <FiTrash2 />
              </DeleteButton>
            </CardHeader>
            <CardIndex>
              {props.columnTitle} # {props.index + 1}
            </CardIndex>
            <Description>{props.task.description}</Description>
          </Container>
        )}
      </Draggable>
    </li>
  );
};

export default Card;
