import React from 'react';
import { Task } from '../Task/Task';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { ListWrapper } from './styled';

export const List = ({
  tasks,
  handleDeleteTask,
  handleCheckboxChecked,
  editTask,
}) => {
  return (
    <ListWrapper>
      <ListGroup>
        {tasks.map(task => {
          return (
            <ListGroupItem>
              <Task
                editTask={editTask}
                handleDeleteTask={handleDeleteTask}
                handleCheckboxChecked={handleCheckboxChecked}
                key={task.id}
                id={task.id}
                content={task.content}
                isChecked={task.isChecked}
              />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </ListWrapper>
  );
};
