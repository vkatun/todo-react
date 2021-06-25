import { useState } from 'react';
import { ContentEditor } from '../ContentEditor/ContentEditor';
import { TaskWrapper, ButtonsWrapper } from './styled';
import { Button } from 'react-bootstrap';

export const Task = ({
  id,
  content,
  key,
  isChecked,
  handleDeleteTask,
  handleCheckboxChecked,
  editTask,
}) => {
  const [isEditorOpened, setIsEditorOpened] = useState(false);

  const deleteTask = () => handleDeleteTask(id);

  const handleCheckboxChange = () => handleCheckboxChecked(id);

  return (
    <TaskWrapper key={id} id={id}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => handleCheckboxChange(id)}
      />
      {isEditorOpened ? (
        <ContentEditor editTask={editTask} id={id} content={content} />
      ) : (
        content
      )}
      <ButtonsWrapper>
        <Button
          variant='secondary'
          onClick={() => setIsEditorOpened(!isEditorOpened)}
        >
          редактировать
        </Button>
        <Button variant='danger' onClick={deleteTask}>
          x
        </Button>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
