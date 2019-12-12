import React, { Component } from "react";
import s from "./MenuLeft.module.scss";
import cx from "classnames";

import {
  Link,
} from "react-router-dom";

interface IProps {
  menuItems: IMenuItem[];
  className?: string;
}

interface IState {}

const MenuLeft = (props: IProps) => {
  return (
    <div className={cx(s.root, props.className)}>
      {props.menuItems &&
        props.menuItems.map((item, key) => (
          <Link
            className={cx(s.menuItem, { [s.selected]: item.selected })}
            key={key}
            to={item.to}
          >
            {item.name}
          </Link>
        ))}
    </div>
  );
};

export default MenuLeft;
