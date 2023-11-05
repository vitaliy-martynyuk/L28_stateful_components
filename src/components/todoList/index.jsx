import { TodoItem } from "./todoItem";

export const TodoList = ({ toDos, onDelete }) => {
  return (
    <ul>
      {toDos.map((el, id) => (
        <TodoItem
          key={id}
          name={el.name}
          status={el.status}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
