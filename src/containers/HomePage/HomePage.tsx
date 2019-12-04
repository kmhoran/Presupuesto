import React, { Component } from "react";
import s from "./HomePage.module.scss";
import Plate from "../../components/Plate";
import PlateBtton from "../../components/Buttons/PlateButton";
// import PlateRadio from "../../components/Radios/PlateRadio";
import DateRangePicker from "../../components/DateRangePicker";

interface IProps {}

interface IPlateRadioProps extends IRadio.IProps {
  selectedId: string;
  onChange: (id: string) => void;
}

interface IState {}

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

class HomePage extends Component<IProps, IState> {
  handleDateChange = (otion: IRadio.IOption) => console.log("DATE", otion);
  render() {
    return (
      <div className={s.root}>
        <DateRangePicker className={s.datePicker} onChange={this.handleDateChange} />
        <>
          <PlateBtton
            text={"Click Me"}
            onClick={() => console.log("CLICKED")}
          />
        </>
        <>
          <Plate className={s.content}>
            <h1 className={s.title}>1</h1>
          </Plate>
          <Plate className={s.content}>
            <h1 className={s.title}>2</h1>
          </Plate>
          <Plate className={s.content}>
            <h1 className={s.title}>3</h1>
          </Plate>
        </>
      </div>
    );
  }
}

export default HomePage;
