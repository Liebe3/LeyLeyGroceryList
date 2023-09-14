import React, { useState } from "react";

const ListIitem = ({ list, handleDeleteList, handeEditItem }) => {
  const [newlist, setNewList] = useState(list.name);
  const [isEditing, setIsEditing] = useState(false);
  const [empty, setEmpty] = useState("");

  const onEdit = () => {
    if (newlist) {
      handeEditItem(list.id, newlist);
      setIsEditing(false);
    } else {
      setEmpty("Please fill out this field.");
    }
  };

  return (
    <>
      <li>
        {isEditing ? (
          <input
            className="input"
            value={newlist}
            onChange={(e) => setNewList(e.target.value)}
          />
        ) : (
          <span>{list.name}</span>
        )}
        {empty ? <p className="empty-input">{empty}</p> : null}
        <div>
          <button
            className="btn-edit"
            onClick={isEditing ? onEdit : () => setIsEditing(true)}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            className="btn-delete"
            onClick={() => handleDeleteList(list.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default ListIitem;
