import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import TodoItem from "./components/ToDoItem";
import ShowFinished from "./components/ShowFinished";

function App() {
  const [idNum, setIdNum] = useState(3);
  const [showDone, setShowDone] = useState(false);

  const [todo, setTodo] = useState([
    {
      title: "make to do list",
      description: "write the to do app for day 4 of Trace camp",
      id: 1,
      stillTodo: true,
    },
    {
      title: "be amazing",
      description: "you got this one down free",
      id: 2,
      stillTodo: false,
    },
  ]);

  const handleAdd = (title, description) => {
    let temp = todo;
    const newTodo = {
      title: title,
      description: description,
      id: idNum,
      stillTodo: true,
    };
    setIdNum((prevId) => prevId + 1);

    temp = temp.concat(newTodo);
    setTodo(temp);
  };

  const handleFinished = (finishId) => {
    setTodo(
      todo.map((finish) => {
        if (finishId === finish.id) {
          return { ...finish, stillTodo: !finish.stillTodo };
        }
        return finish;
      })
    );
  };

  const handleClick = () => {
    if (showDone === true) {
      setShowDone(false);
    } else {
      setShowDone(true);
    }
  };

  const handleDelete = (deleteId) => {
    setTodo(
      todo.map((toDelete) => {
        if (deleteId === toDelete.id) {
          return { ...toDelete, id: -100 };
        }
        return toDelete;
      })
      .filter((deleteNegId) => {
        if(deleteNegId.id < 0) {
          return false
        }
        else {
          return true
        }
      })
    );
  }

  return (
    <div className="App">
      <ShowFinished handleClick={handleClick}/>

      {todo
        .filter((notFinished) => {
          if (showDone === true) {
            return true;
          } else {
            return notFinished.stillTodo === true;
          }
        })
        .map((newItem) => (
          <TodoItem
            handleDelete={handleDelete}
            handleFinished={handleFinished}
            title={newItem.title}
            description={newItem.description}
            id={newItem.id}
            stillTodo={newItem.stillTodo}
          />
        ))}

      <Form handleSubmit={handleAdd} />
    </div>
  );
}

export default App;
