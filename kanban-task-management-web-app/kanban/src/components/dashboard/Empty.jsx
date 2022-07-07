import React from "react";
import { useState } from "react";
import "../../styles/dashboard.scss";
import AddColumns from "./AddColumns";

export default function Empty() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="empty">
      <p>This board is empty. Create a new column to get started.</p>
      <AddColumnButton toggleForm={setShowForm} />
      {showForm && <AddColumns hideForm={() => setShowForm(false)} />}
      {showForm && (
        <div className="darkBackground" onClick={() => setShowForm(false)} />
      )}
    </div>
  );
}

const AddColumnButton = ({ toggleForm }) => {
  return (
    <button onClick={() => toggleForm((prev) => !prev)}>Add New Column</button>
  );
};
