import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={this.onDeleteTodo}>
        Delete
      </button>
      </div>
  )
}

export default TodoItem
