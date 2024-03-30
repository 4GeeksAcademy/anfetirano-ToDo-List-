import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
  
  const { list, setList } = props;

  const onChangeStatus = (id) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done }; 
      }
      return item;
    });
    setList(updatedList);
  };

  const onClickRemoveItem = () => {
    const updatedList = list.filter(item => !item.done); 
    setList(updatedList);
  };

  return (
    <div className="todo-list">
      {list.length ? (
        list.map(item => (
          <Checkbox 
            key={item.id} 
            data={item} 
            onChange={() => onChangeStatus(item.id)} 
          />
        ))
      ) : (
        <p>No tasks</p>
      )}
      <div className="button-container">
        {list.some(item => item.done) && (
          <button className="button delete-button" onClick={onClickRemoveItem}>
            Delete Completed Tasks
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskList;
