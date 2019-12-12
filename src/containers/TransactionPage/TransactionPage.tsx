import React, { Component } from "react";
import s from "./TransactionPage.module.scss";
import Plate from "../../components/Plate";
import PlateBtton from "../../components/inputs/Buttons/PlateButton";
// import PlateRadio from "../../components/Radios/PlateRadio";
import DateButtons from "../../components/DateButtons";
import cx from "classnames";
import ToggleSwitch from "../../components/inputs/ToggleSwitch";
import Pill  from '../../components/Pill';

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
        <div className={s.TransactionRow}>
          <Plate className={cx(s.content, s.topLeft)}>
            <ColumnReport title={"Categories"} />
          </Plate>
          <Plate className={cx(s.content, s.topRight)}>
            <div className={s.amountToSpendBar}>
              <div className={s.amountToSpend}>
                <div className={s.title}>Amount to spend</div>
                <div className={s.amountToSpendValue}>$53</div>
              </div>
              <ToggleSwitch />
            </div>
            <div>
              <div>Household contribution</div>
              <Pill className={s.pill}>
                + $500
              </Pill>
            </div>
          </Plate>
        </div>
        <>
          <Plate className={s.content}>
            <h1 className={s.title}>3</h1>
          </Plate>
        </>
      </div>
    );
  }
}

export default TransactionPage;
