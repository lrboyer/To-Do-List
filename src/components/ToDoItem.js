
const TodoItem = ({ title, description, stillTodo, handleDelete, handleFinished, id}) => {
  return (
    <div>
      <h1>{title}: {description}</h1>
      <button onClick={() => handleFinished(id)}>Finished</button>
      <button onClick={() => handleDelete(id)}>Delete This</button>
    </div>
  )
}

export default TodoItem;