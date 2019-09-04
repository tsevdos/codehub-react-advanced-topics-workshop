import React, { Component } from "react";

class TodoApp extends Component {
  state = {
    toDoInput: "",
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos.slice(0, 5) }));
  }

  toggleDone = id => {
    const newTodos = [...this.state.todos];
    newTodos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        return todo;
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  updateInput = event => {
    this.setState({ toDoInput: event.target.value });
  };

  addToDo = e => {
    e.preventDefault();
    const { todos, toDoInput } = this.state;
    const lastItemId = todos.length - 1;
    const newToDo = {
      id: todos[lastItemId].id + 1,
      title: toDoInput,
      completed: false
    };
    const newTodos = [...todos, newToDo];

    this.setState({ todos: newTodos, toDoInput: "" });
  };

  render() {
    const { addToDo, toggleDone, updateInput } = this;
    const { todos, toDoInput } = this.state;

    return (
      <div>
        <h2 className="is-size-4">My ToDos exercise</h2>
        <h3 className="is-size-5">
          Re-write the app using Presentational and Container components
        </h3>
        <br />
        <ul>
          {Boolean(todos.length) &&
            todos.map(({ id, title, completed }) => (
              <li key={title}>
                <label>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleDone(id)}
                  />
                  &nbsp;
                  {completed ? <strike>{title}</strike> : <span>{title}</span>}
                </label>
              </li>
            ))}
        </ul>
        <form onSubmit={addToDo}>
          Add ToDo:{" "}
          <input value={toDoInput} onChange={updateInput} type="text" />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
