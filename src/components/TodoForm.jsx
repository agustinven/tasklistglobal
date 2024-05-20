import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 32px;
`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 8px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 70%; /* Cambiar a un ancho relativo */
  max-width: 320px; /* Añadir un ancho máximo */
  background: transparent;
  color: #fff;

  &::placeholder {
    color: #e2e2e2;
  }
`;

const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
  margin-left: 10px;
`;

const EditInput = styled(Input)`
  border: 2px solid #149fff;
`;

const EditButton = styled(Button)`
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
`;

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  // Generar valores aleatorios para el año, mes, día, hora
  const randomYear = Math.floor(Math.random() * (new Date().getFullYear() - 2024)) + 2024;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1; 
  
  // Crear la fecha aleatoria
  const randomDate = new Date(randomYear, randomMonth - 1, randomDay);

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      description: input,
      dueDate: randomDate.toLocaleDateString('es-ES')
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <EditInput
            placeholder='Actualizar tarea'
            value={input}
            onChange={handleChange}
            name='description'
            ref={inputRef}
            className='todo-input edit'
          />
          <EditButton onClick={handleSubmit}>
            Editar
          </EditButton>
        </>
      ) : (
        <>
          <Input
            placeholder='Nueva tarea'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>
            Añadir
          </Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
