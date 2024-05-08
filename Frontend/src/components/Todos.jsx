export function Todos({ todos }) {
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
        <>
          <h2>Title</h2>
          <h3>description</h3>
          <button style={{ marginLeft: "auto" }}>Mark as completed</button>
        </>;
      })}
    </div>
  );
}
