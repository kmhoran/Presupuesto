import React, { Component } from "react";
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from "./DefaultLayout.module.scss";
import Header from "../../../components/Header";
import MenuLeft from "../../../components/MenuLeft";

interface IProps {
  children: any;
}

interface IState {}

const menuItems: IMenuItem[] = [
  {
    name: "Dashboard",
    icon: () => <h1>D</h1>,
    id: "dashboard",
    selected: true,
    to: '/'
  },
  {
    name: "Transactions",
    icon: () => <h1>T</h1>,
    id: "transacrions",
    selected: false,
    to: 'transactions'
  },
  {
    name: "Messages",
    icon: () => <h1>M</h1>,
    id: "messages",
    selected: false,
    to:'/messages'
  },
  {
    name: "Reports",
    icon: () => <h1>R</h1>,
    id: "reports",
    selected: false,
    to: '/reports'
  }
];

class DefaultLayout extends Component<IProps, IState> {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header></Header>
        <div className={s.body}>
          <MenuLeft className={s.menuLeft} menuItems={menuItems} />
          <div className={s.content}>{children}</div>
        </div>
      </>
    );
  }
}

export default DefaultLayout;
