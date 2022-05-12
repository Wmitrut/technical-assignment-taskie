/* eslint-disable no-unused-vars */

import { Container, ColumnHeader, DeleteButton, TaskList, Title } from './styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FiTrash2 } from 'react-icons/fi';
import AddTask from '../AddTask';
import Card from '../Card';

const Column = (props) => {
  function deleteColumn(columnId, index) {
    const columnTasks = props.board.columns[columnId].taskIds;
    const finalTasks = columnTasks.reduce((previousValue, currentValue) => {
      const { [currentValue]: oldTask, ...newTasks } = previousValue;
      return newTasks;
    }, props.board.tasks);

    const columns = props.board.columns;
    const { [columnId]: oldcolumn, ...newColumns } = columns;

    const newColumnOrder = Array.from(props.board.columnOrder);
    newColumnOrder.splice(index, 1);
    props.setBoard({
      tasks: {
        ...finalTasks,
      },
      columns: {
        ...newColumns,
      },
      columnOrder: newColumnOrder,
    });
  }

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <ColumnHeader>
            <Title>
              ({props.tasks.length}) {props.column.title}
            </Title>
            <div>
              <DeleteButton
                onClick={() => deleteColumn(props.column.id, props.index)}
                type="button">
                <FiTrash2 />
              </DeleteButton>
            </div>
          </ColumnHeader>
          <Droppable droppableId={props.column.id} type={'task'} className={'droppable-area'}>
            {(provided) => (
              <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                {props.tasks.map((task, index) => (
                  <Card
                    key={task.id}
                    board={props.board}
                    setModalShown={props.setModalShown}
                    setBoard={props.setBoard}
                    task={task}
                    index={index}
                    columnTitle={props.column.title}
                    columnId={props.column.id}
                  />
                ))}
                {provided.placeholder}
                <AddTask columnId={props.column.id} board={props.board} setBoard={props.setBoard} />
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
