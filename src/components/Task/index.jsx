import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FiShare, FiX } from 'react-icons/fi';
import useFlashMessage from '../../hooks/useFlashMessage';
import {
  Backdrop,
  Container,
  TaskID,
  TaskDescription,
  TaskHeader,
  TaskTitle,
  CardButton,
  CloseButton,
  Copied,
} from './styles';

const Task = (props) => {
  const [copied, setCopied] = useState(false);

  const [flashCopied, setflashCopied] = useFlashMessage();
  const navigate = useNavigate();

  async function copy() {
    await navigator.clipboard.writeText(location.href);
    setCopied(true);
  }

  useEffect(() => {
    if (copied === true) {
      setflashCopied(true);
    }
  }, [copied]);

  return (
    <Backdrop
      onClick={(event) => {
        props.setModalShown(false);
        event.stopPropagation();
        event.preventDefault();
        navigate(`/`);
      }}>
      <Container onClick={(event) => event.stopPropagation()}>
        <TaskHeader>
          <TaskTitle>{props.task.title}</TaskTitle>
          <div style={{ display: 'flex' }}>
            <CardButton onClick={() => copy()} type="button">
              <FiShare />
            </CardButton>
            <CloseButton
              type="button"
              onClick={() => {
                props.setModalShown(false);
                navigate(`/`);
              }}>
              <FiX />
            </CloseButton>
          </div>
        </TaskHeader>

        <TaskID>#{props.task.id}</TaskID>
        <TaskDescription>{props.task.description}</TaskDescription>
        {flashCopied ? <Copied>Card URL copied to clipboard</Copied> : null}
      </Container>
      <Outlet />
    </Backdrop>
  );
};

export default Task;
