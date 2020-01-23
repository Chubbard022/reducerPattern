import React, { useState, useReducer } from "react";

import { initialState, titleReducer } from "../reducers";

const editAction = { type: "CHANGE_EDIT" };

const Title = () => {
  const [newTitleText, setNewTitleText] = useState("");

  const [state, dispatch] = useReducer(titleReducer, initialState);

  console.log("==>", state);
  // const handleChanges = e => {
  //   setNewTitleText(e.target.value);
  // };
  const editTitle = e => {
    dispatch(editAction);
  };
  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title} <i className="far fa-edit" onClick={editTitle} />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
          />
          <button>Update title</button>
        </div>
      )}
    </div>
  );
};

export default Title;
