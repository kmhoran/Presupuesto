import React, { Component } from "react";
import logo from "../../logo.svg";
import s from "./Header.module.scss";

interface IProps {}

interface IState {}

class Header extends Component<IProps, IState> {
  render() {
    return (
      <div className={s.root}>
        <div className={s.logoSpace}>
          <img src={logo} className={s.logo} alt="logo" />
        </div>
        <div className={s.accountSpace}>
          {/* replace w/ module */}
          <div className={s.accountPictureFrame}>
            <img
              src="https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-768x519.jpg"
              className={s.accountPicture}
            />
          </div>
          <div className={s.profileName}>User 1</div>
        </div>
      </div>
    );
  }
}

export default Header;
