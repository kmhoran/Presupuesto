import React from "react";
import logo from "./logo.svg";
import HomePage from "./containers/HomePage";
import DefaultLayout from "./containers/Layouts/DefaultLayout";

const App: React.FC = () => {
  return (
    <div className="App">
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </div>
  );
};

export default App;
