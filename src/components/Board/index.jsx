/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Container, OuterContainer } from './styles';
import AddColumn from '../AddColumn';
import Column from '../Column';
import Header from '../Header';
import Task from '../Task';

const Board = () => {
  const initialData = { tasks: {}, columns: {}, columnOrder: [] };
  const [board, setBoard] = useState(initialData);
  const [isModalShown, setModalShown] = useState(false);
  const url = new URL(window.location.href);
  const urlID = url.searchParams.get('taskID') || '';
  const taskURL = board.tasks[urlID] || '';

  useEffect(() => {
    fetchBoard().then((data) => setBoard(data));
  }, []);

  useEffect(() => {
    if (board !== initialData) {
      saveBoard();
    }
  }, [board]);

  useEffect(() => {
    if (urlID !== '') {
      setModalShown(true);
    }
  }, [urlID]);

  async function fetchBoard() {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/board`);
    const data = await response.json();
    return data;
  }

  async function saveBoard() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(board),
    });
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newColumOrder = Array.from(board.columnOrder);
      newColumOrder.splice(source.index, 1);
      newColumOrder.splice(destination.index, 0, draggableId);

      setBoard({
        ...board,
        columnOrder: newColumOrder,
      });

      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setBoard({
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      });

      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinishColumn = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setBoard({
      ...board,
      columns: {
        ...board.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    });

    return;
  };

  return (
    <>
      {isModalShown ? <Task task={taskURL} setModalShown={setModalShown} /> : null}
      <Header />

      <OuterContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <AddColumn board={board} setBoard={setBoard} />
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {board.columnOrder.map((columnId, index) => {
                  const column = board.columns[columnId];
                  const tasks = column.taskIds.map((taskIds) => board.tasks[taskIds]);
                  return (
                    <Column
                      key={column.id}
                      setBoard={setBoard}
                      board={board}
                      column={column}
                      tasks={tasks}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </OuterContainer>
    </>
  );
};

export default Board;
