import React, { Component } from "react";
import s from "./PlateButton.module.scss";
import BaseButton from "../BaseButton";


class PlateButton extends BaseButton<IButtonProps> {
  render()
  {
    return (<this.Base className={s.root}/>)
  }
}

export default PlateButton;
