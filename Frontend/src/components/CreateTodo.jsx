export function CreateTodo() {
    return (
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          width: '50%', /* Adjust width as needed */
          margin: 'auto', /* Center horizontally */
          padding: '20px', /* Add padding for spacing */
        }}>
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="Title"
        />
        <br />
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
          type="text"
          placeholder="Description"
        />
        <br />
        <button style={{
            padding: 10,
            margin: 10,
          }}>Add Todo</button>
      </div>
    );
  }
  