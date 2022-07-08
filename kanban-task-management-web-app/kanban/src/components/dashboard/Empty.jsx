import React from "react";

import "../../styles/dashboard.scss";
import AddColumns from "./AddColumns";

import { boardActions } from "../../store/board-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Empty() {
  const dispatch = useDispatch();

  const hideForm = () => {
    dispatch(boardActions.hideFormAddColumns());
  };

  const showAddColumns = useSelector((state) => state.board.showAddColumns);

  return (
    <div className="empty">
      <p>This board is empty. Create a new column to get started.</p>
      <AddColumnButton />
      {showAddColumns && <AddColumns />}
      {showAddColumns && <div className="darkBackground" onClick={hideForm} />}
    </div>
  );
}

const AddColumnButton = () => {
  const dispatch = useDispatch();

  const showForm = () => {
    dispatch(boardActions.showFormAddColumns());
  };

  return <button onClick={showForm}>Add New Column</button>;
};
