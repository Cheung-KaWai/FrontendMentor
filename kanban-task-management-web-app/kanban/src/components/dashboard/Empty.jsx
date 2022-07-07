import React from "react";
import "../../styles/dashboard.scss";

export default function Empty() {
  return (
    <div className="empty">
      <p>This board is empty. Create a new column to get started.</p>
      <AddColumnButton />
    </div>
  );
}

const AddColumnButton = () => {
  return <button>Add New Colmun</button>;
};
