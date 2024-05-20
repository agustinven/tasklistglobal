import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alinear los elementos arriba en lugar de centrarlos verticalmente */
  margin: 8px auto; /* Aumentar el margen */
  color: #fff;
  background: linear-gradient(90deg, rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%);
  padding: 16px;
  border-radius: 5px;
  width: 90%;

  &:nth-child(4n + 1) {
    background: linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%);
  }

  &:nth-child(4n + 2) {
    background: linear-gradient(90deg, rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%);
  }

  &:nth-child(4n + 3) {
    background: linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%);
  }

  &.complete {
    text-decoration: line-through;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    padding: 24px 16px;
    margin: 8px auto;
  }
`;

const Header = styled.div`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 16px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 8px;
  }
`;

const CompleteIcon = styled(RiCheckboxCircleLine)`
  margin-right: 5px;
  color: #fff;
`;

const DeleteIcon = styled(RiCloseCircleLine)`
  margin-right: 5px;
  color: #fff;
`;

const EditIcon = styled(TiEdit)`
  color: #fff;
`;

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoRow
      className={todo.isComplete ? "complete" : ""}
      key={index}
    >
      <div style={{ marginBottom: '8px' }}> 
        <Header>Descripción</Header>
        {todo.description}
      </div>
      <div style={{ marginBottom: '8px' }}> 
        <Header>Vencimiento</Header>
        {todo.dueDate}
      </div>
      <Icons>
        <CompleteIcon
          onClick={() => completeTodo(todo.id)}
        />
        <DeleteIcon
          onClick={() => removeTodo(todo.id)}
        />
        <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.description })}
        />
      </Icons>
    </TodoRow>
  ));
};

export default Todo;
