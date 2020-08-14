import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CreateH1Header } from "./Components/FunctionComponents";
import { CreateH2Header, Greeting } from "./Components/ClassComponents";
import * as serviceWorker from "./serviceWorker";

// const title = React.createElement('h3', {}, 'My First React Code - H3');
// const title2 = React.createElement('h2', {}, 'My First React Code - H2');

const title = React.createElement("h1", { key: 1 }, "Hello World!");
const paragraph = React.createElement("p", { key: 2 }, "Paragraph in webpage");

const GreetingElement = <Greeting name="Zbig!" key={3} />;
const container = React.createElement("div", { key: 4 }, [GreetingElement, title, paragraph, ]);


ReactDOM.render(container, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();
