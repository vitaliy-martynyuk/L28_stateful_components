export const TodoItem = ({ name, status, onDelete, id }) => {
  return (
    <li>
      {name} - {status}{" "}
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
