import React from "react";
import Empty from "../components/dashboard/Empty";
import MobileNav from "../components/nav/MobileNav";
import Dashboard from "../components/dashboard/Dashboard";

import { useSelector } from "react-redux";

export default function Board() {
  const columns = useSelector((state) => state.board.columns);

  return (
    <div>
      <MobileNav />
      {columns.length > 0 ? <Dashboard /> : <Empty />}
    </div>
  );
}
