import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import DefaultLayout from "../containers/Layouts/DefaultLayout";
import routes from "./routes";

function WappedPage(Passed:any) {
  return class extends React.Component {
    render(){
      return <DefaultLayout><Passed {...this.props}/></DefaultLayout>;
    }
  }
}

export default function AppRouter() {
  
  return (
    <Router>
      <>
        {routes.list.map((route, key) => {
          const { exactPath, path, component } = route;
          const page = WappedPage(component);
          return (
            <Route
              key={key}
              exact={exactPath}
              path={path}
              component={page}
            />
          );
        })}
      </>
    </Router>
  );
}
