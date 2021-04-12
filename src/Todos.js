import "./styles.css";
import { useState } from "react";
import firebase from "firebase/app";
import { db, auth } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Todos() {
  const [currentTodo, setCurrentTodo] = useState("");

  const todosRef = db.collection(`/users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });

   const addTodo = (e) => {
    e.preventDefault();
    if (currentTodo) {
      if (currentTodo.length < 25) {
        todosRef
          .add({
            text: currentTodo,
            complete: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          })
          .catch((error) => {
            alert("Error adding todo: ", error);
          });
        }
        alert("Todo too big. Set a small goal ;)")
      }
      alert("Please enter something to add")
      setCurrentTodo(""); // Empty the input element
  };
  const deleteTodo = (id) => todosRef.doc(id).delete();

  return (
    <div className="todos">
      <form onSubmit={addTodo}>
        <input
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          type="text"
          className="addInput"
          placeholder="What's next?"
        ></input>
        <input type="submit" className="addBtn" value="Add"></input>
      </form>
      {todos
        ? todos.map((todo) => (
            <div key={todo.id} className="todo">
              <p>{todo.text}</p>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
