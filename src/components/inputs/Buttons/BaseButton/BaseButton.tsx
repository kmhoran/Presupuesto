import React, { Component } from "react";
import s from "./BaseButton.module.scss";
import cx from "classnames";

class BaseButton<T extends IButtonProps> extends Component<T> {
  handleClick = () => this.props.onClick && this.props.onClick();
  Base = ({ className }: { className?: string }) => {
    return (
      <button className={cx(s.root, className)} onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  };
  render() {
    return <this.Base />;
  }
}

export default BaseButton;
