import React from "react";
import "../../styles/dashboard.scss";
import { useSelector } from "react-redux";
import ColumnHeader from "./ColumnHeader";

export default function Dashboard() {
  const columns = useSelector((state) => state.board.columns);

  return (
    <div className="dashboard">
      {columns.map((column, index) => (
        <ColumnHeader name={column} key={index} />
      ))}
    </div>
  );
}
