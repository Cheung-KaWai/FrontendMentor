import React from "react";
import "../../styles/dashboard.scss";

export default function ColumnHeader({ name }) {
  return (
    <div className="columnHeader">
      <span />
      <h2>{name}</h2>
    </div>
  );
}
