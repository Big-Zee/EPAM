import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./assets/scripts/components/App";
import CreateHeader from "./assets/scripts/components/Header/Header";

const Index = () => {
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
