import React from "react";

// Components
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

// Style
import "./app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
