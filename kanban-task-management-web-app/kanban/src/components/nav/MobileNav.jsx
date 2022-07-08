import React from "react";
import "../../styles/nav.scss";
import { ReactComponent as MobileLogo } from "../../images/logo-mobile.svg";
import { ReactComponent as ArrowDown } from "../../images/icon-chevron-down.svg";
import { ReactComponent as Settings } from "../../images/icon-vertical-ellipsis.svg";
import { ReactComponent as Add } from "../../images/icon-add-task-mobile.svg";
import { useState } from "react";

import { useSelector } from "react-redux";

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navContainer">
      <MobileLogo />
      <nav>
        <h1>
          <button onClick={() => setShowMenu((prev) => !prev)}>
            Platform Launch <ArrowDown />
          </button>
        </h1>
        {showMenu && <Menu />}
      </nav>
      <AddButton />
      <Settings />
    </div>
  );
}

const Menu = () => {
  return (
    <ul className="submenu">
      <li>Platform Launch</li>
      <li>Marketing Plan</li>
      <li>Roadmap</li>
      <li>Create new board</li>
    </ul>
  );
};

const AddButton = () => {
  const disable = useSelector((state) => state.board.columns);

  return (
    <button className={`addButton ${disable.length === 0 && "opacityHalf"}`}>
      <Add />
    </button>
  );
};
