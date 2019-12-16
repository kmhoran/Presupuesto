import React, { Component } from "react";
import s from "./TransactionPage.module.scss";
import cx from "classnames";
import Plate from "../../components/Plate";

interface IProps {
  className?: string;
}

const dataTypes = {
  date: 'date',
  currency: 'currency',
  text: 'text'
}

const columns = [
  {
key: 'date',
label: 'Date',
type: dataTypes.date
  },{
key: 'amount',
label:'Amount',
type: dataTypes.currency
  },
  {
key: 'description',
label: 'Description',
type: dataTypes.text
  }
]


export default class TransacrionTable extends Component<IProps> {

  get (){

  }

  render() {
    return (
      <Plate className={cx(this.props.className)}>
        <table className={s.table}>
          <thead className={s.heading}>
            <td>Date</td>
            <td>Amount</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>2019-09-12</td>
              <td>$100</td>
              <td>A purchase</td>
            </tr>
          </tbody>
        </table>
      </Plate>
    );
  }
}
