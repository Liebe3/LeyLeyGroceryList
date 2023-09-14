import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "../../src/App.css";
import TodolistComponent from "./TodolistComponent";

const TodoComponents = () => {
  const [list, setList] = useState("");
  const [listItem, setListItem] = useState([]);
  const [empty, setIsEmpty] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleAddItem = () => {
    if (list) {
      setListItem([...listItem, { id: uuid(), name: list }]);
      setList("");
      setIsEmpty("");
    } else {
      setIsEmpty("Please fill out this field.");
    }
  };

  const handeEditItem = (id, newlist) => {
    const updateList = listItem.map((list) => {
      if (id === list.id) {
        return { ...listItem, name: newlist };
      }
      return list;
    });
    setListItem(updateList);
  };

  const handleDeleteList = (removeId) => {
    const filteredList = listItem.filter((list) => removeId !== list.id);
    setListItem(filteredList);
  };

  const handelClearList = () => {
    if (confirm) {
      setConfirm("");
    } else {
      setConfirm("Are you sure you want to clear the list?");
    }
  };

  const handleConfirm = () => {
    setListItem([]);
    setConfirm("");
  };

  return (
    <div className="todolist-container">
      <h1>Leih Leih Grocery List</h1>
      <div className="input-section">
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Add Item"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <button onClick={handleAddItem}>Add List</button>
        </div>
        {empty ? <p className="empty">{empty}</p> : null}
      </div>
      <ul>
        {listItem.map((list) => (
          <TodolistComponent
            key={list.id}
            list={list}
            handleDeleteList={handleDeleteList}
            handeEditItem={handeEditItem}
          />
        ))}
      </ul>
      {listItem.length > 0 ? (
        <button className="btn-clear" onClick={handelClearList}>
          Clear List
        </button>
      ) : null}
      {confirm && (
        <div className="confirm">
          <p className="empty">{confirm}</p>
          <div>
            <button className="btn-delete" onClick={handleConfirm}>
              Yes
            </button>
            <button className="btn-edit" onClick={() => setConfirm("")}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoComponents;
