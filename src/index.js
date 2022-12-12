// React Librarys
import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom

// App
import App from "./App";

// Redux
import { Provider } from "react-redux";
import { store } from "../app/store";

// Style
// Global Style
import GlobalStyle from "../globalStyle/GlobalStyle";

// react-router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render component App vào #root element

root.render(
  <Provider store={store}>
    <GlobalStyle>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </GlobalStyle>
  </Provider>
);
