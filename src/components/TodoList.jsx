import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import Todo from './Todo';
import FilterDropdown from './filters/FilterDropdown';
import SortButton from './filters/SortButton';
// import DateSortButton from './filters/DateSortButton';

const TodoAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 90%;
  max-width: 600px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  //const [dateSortOrder, setDateSortOrder] = useState('asc');

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos(prevTodos =>
      prevTodos.map(item => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const sortAlphabetically = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      const descA = a.description.toLowerCase();
      const descB = b.description.toLowerCase();
      return sortOrder === 'asc' ? descA.localeCompare(descB) : descB.localeCompare(descA);
    });
    setTodos(sortedTodos);
    setSortOrder(order => (order === 'asc' ? 'desc' : 'asc'));
  };

  //Implementacion para ordenamiento por fecha
  // const sortDate = () => {
  //   const sortedTodos = [...todos].sort((a, b) => {
  //     const dateA = new Date(a.dueDate);
  //     const dateB = new Date(b.dueDate);
  //     return dateSortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  //   });
  //   setTodos(sortedTodos);
  //   setDateSortOrder(order => (order === 'asc' ? 'desc' : 'asc'));
  // };

  const filteredTodos = filter === 'all' ? todos :
    filter === 'completed' ? todos.filter(todo => todo.isComplete) :
      filter === 'pending' ? todos.filter(todo => !todo.isComplete) : todos;

  return (
    <TodoAppContainer>
      <h1>Tareas del día</h1>
      <TodoForm onSubmit={addTodo} />
      <FilterContainer>
        <FilterDropdown
          filter={filter}
          changeFilter={changeFilter}
        />
        <SortButton
          sortOrder={sortOrder}
          sortAlphabetically={sortAlphabetically}
        />
        {/* La logica para que el filtro de fecha funcione esta presente, pero no logre hacerla funcionar, dejo prueba de la implementacion de la funcion */}
        {/* <DateSortButton
          sortOrder={dateSortOrder}
          sortDate={sortDate}
        /> */}
      </FilterContainer>
      <Todo
        todos={filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </TodoAppContainer>
  );
}

export default TodoList;
