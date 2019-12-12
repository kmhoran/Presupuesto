import React, { Component } from "react";
import s from "./PlateRadio.module.scss";
import cx from "classnames";

class PlateRadio extends Component<IRadio.IProps> {
  handleChange = (id: string) => this.props.onChange && this.props.onChange(id);
  ItemInput = (item: IRadio.IOption) => {
    const isSelected = item.id == this.props.selectedId;
    return (
      <label className={cx(s.label, { [s.selected]: isSelected })}>
        <input
          className={s.input}
          type="radio"
          name={this.props.name}
          onChange={() => this.handleChange(item.id)}
          value={item.value}
          disabled={item.diabled}
          defaultChecked={item.defaultChecked}
        />
        {item.label}
      </label>
    );
  };

  render() {
    const { className, options } = this.props;
    return (
      <form className={className}>
        {options &&
          options.map((item, key) => <this.ItemInput {...item} key={key} />)}
      </form>
    );
  }
}

export default PlateRadio;
