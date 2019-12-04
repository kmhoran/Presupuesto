import React, { Component } from "react";
import s from "./Plate.module.scss";
import cx from "classnames";

interface IProps {
  children: any;
  className?: string;
}


const Plate = (props: IProps) => {
  return (
    <div className={cx(s.root, props.className)}>
      {props.children}
    </div>
  );
};

export default Plate;
