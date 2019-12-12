import React, { Component } from "react";
import s from "./DateButtons.module.scss";
import cx from "classnames";
import PlateRadio from "../inputs/Radios/PlateRadio/PlateRadio";
import { find } from "lodash";

const options: IRadio.IOption[] = [
  {
    id: "1",
    label: "All Time",
    value: "all"
  },
  {
    id: "2",
    label: "This Year",
    value: "year"
  },
  {
    id: "3",
    label: "This Month",
    value: "month",
    defaultChecked: true
  }
];

interface IProps {
  onChange?(option?: IRadio.IOption): any;
  className: string;
}

interface IState {
  options: IRadio.IOption[];
  selectedId: string;
}

class DateButtons extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const seleted = (find(options, x => x.defaultChecked) ||
      {}) as IRadio.IOption;
    this.state = {
      options,
      selectedId: seleted.id
    };
  }

  handleChange = (id: string) => {
    const option = find(options, x => x.id === id);
    this.setState(
      {
        selectedId: id
      },
      () => this.props.onChange && this.props.onChange(option)
    );
  };

  render() {
    return (
      <PlateRadio
        className={this.props.className}
        name={"date-range-picker"}
        options={this.state.options}
        selectedId={this.state.selectedId}
        onChange={this.handleChange}
      />
    );
  }
}
export default DateButtons;
