import React, { Component } from "react";
import s from "./MenuLeft.module.scss";
import cx from "classnames";

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
          <div
            className={cx(s.menuItem, { [s.selected]: item.selected })}
            key={key}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default MenuLeft;
