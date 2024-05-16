export function Todos({ todos }) {
    console.log(todos);
    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        marginTop: "10px",
        width: "50%" /* Adjust width as needed */,
        margin: "auto" /* Center horizontally */,
        padding: "20px" /* Add padding for spacing */,
      }}
    >

      {todos.map(function (todo) {
        // console.log(todo);
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button style={{ marginLeft: "auto" }}>{todo.completed===true?"Completed":"mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
