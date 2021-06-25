import { useState, useEffect } from 'react';
import { Input } from './styled';

export const ContentEditor = ({ content, id, editTask }) => {
  const [taskText, setTaskText] = useState(content);

  const handleEdit = () => editTask(id, taskText);

  useEffect(handleEdit, [taskText]);

  const handleText = e => {
    setTaskText(e.target.value);
  };

  return <Input value={taskText} onChange={handleText} />;
};
