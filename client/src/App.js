import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // function addItem(name) {
  //   axios
  //     .post("/api/items", { name, complete: false })
  //     .then((res) => {
  //       setTodos([res.data, ...todos]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  async function addItem(name) {
    try {
      const res = await axios.post("/api/items", { name, complete: false });
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateTodo(id) {
    let { data } = await axios.put(`/api/items/${id}`);
    setTodos(todos.map((t) => (t.id !== data.id ? t : data)));
  }

  function deleteTodo(id) {
    axios
      .delete(`/api/items/${id}`)
      .then((res) => {
        const filterTodos = todos.filter((t) => t.id !== res.data.id);
        setTodos(filterTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // now is acting like componentDidMount
  useEffect(() => {
    // TODO make a call to our rails server to get Items
    axios
      .get("/api/items")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <TodoForm addItem={addItem} />
      <h1>Todos</h1>
      <TodoList updateTodo={updateTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;

// import React, { Component, } from 'react';
// // import TodoForm from './components/TodoForm';
// // import TodoList from './components/TodoList';
// import { Container, } from "semantic-ui-react";

// class App extends Component {
//   state = { todos: [], };

//   componentDidMount() {
//     // TODO make a call to our rails server to get Items

//   }

//   addItem = (name) => {
//     // TODO make api call to rails server to add item
//     // TODO update state
//   }

//   updateTodo = (id) => {
//     // TODO make api call to update todo
//     // TODO update state
//   }

//   deleteTodo = (id) => {
//     // TODO make api call to delete todo
//     // TODO remove it from state
//   }

//   render() {
//     return (
//       <Container style={{ padding: "30px 0", }}>
//         <h1>Test</h1>
//         //<TodoForm addItem={this.addItem} />
//         <br />
//         <br />
//         // <TodoList
//         //  todos={this.state.todos}
//         //  updateTodo={this.updateTodo}
//        //   deleteTodo={this.deleteTodo}
//        // />
//       </Container>
//     );
//   }
// }

// export default App;
