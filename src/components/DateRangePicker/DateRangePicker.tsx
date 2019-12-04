import React, { Component } from "react";
import s from "./DateRangePicker.module.scss";
import cx from "classnames";
import PlateRadio from "../Radios/PlateRadio";
import { find } from "lodash";

const options: IRadio.IOption[] = [
  {
    id: "1",
    label: "All Time",
    value: "all",
    defaultChecked: true
  },
  {
    id: "2",
    label: "This Year",
    value: "year"
  },
  {
    id: "3",
    label: "This Month",
    value: "month"
  },
  {
    id: "4",
    label: "Today",
    value: "day"
  }
];

interface IProps {
  onChange?(option?: IRadio.IOption):any;
  className: string;
}

interface IState {
  options: IRadio.IOption[];
  selectedId: string;
}

class DateRangePicker extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      options,
      selectedId: "1"
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
export default DateRangePicker;
