import React, { Component } from "react";
import s from "./TransactionPage.module.scss";
import Plate from "../../components/Plate";
import PlateBtton from "../../components/inputs/Buttons/PlateButton";
// import PlateRadio from "../../components/Radios/PlateRadio";
import DateButtons from "../../components/DateButtons";
import cx from "classnames";
import ToggleSwitch from "../../components/inputs/ToggleSwitch";
import Pill  from '../../components/Pill';
import TransacrionTable from './TransactionTable';
import ColumnReport from "../Reports/ColumnReport";

interface IProps {}
interface IState {}

class TransactionPage extends Component<IProps, IState> {
  handleDateChange = (otion: IRadio.IOption) => console.log("DATE", otion);
  render() {
    return (
      <div className={s.root}>
        <DateButtons
          className={s.datePicker}
          onChange={this.handleDateChange}
        />

        <TransacrionTable className={cx(s.TransactionRow, s.tableFrame)}/>
      </div>
    );
  }
}

export default TransactionPage;
