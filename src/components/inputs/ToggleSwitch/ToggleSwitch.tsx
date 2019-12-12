import React, { Component, ChangeEvent } from "react";
import s from "./ToggleSwitch.module.scss";
import cx from "classnames";

interface IProps {
  onChange?(checked: boolean): void;
  height?: number;
}

interface IState {
  checked: boolean;
}

class ToggleSwitch extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      checked: true
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: e.target.checked });
    this.props.onChange && this.props.onChange(e.target.checked);
  };

  get height() {
    return (this.props || {}).height || 34;
  }

  render() {
    const { checked } = this.state;
    return (
      <label className={cx(s.switch)}>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        <span className={cx(s.slider, s.round)}></span>
      </label>
    );
  }
}

export default ToggleSwitch;
