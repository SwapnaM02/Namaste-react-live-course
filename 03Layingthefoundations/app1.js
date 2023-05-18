import React from "react";
import ReactDOM from "react-dom/client";

const container=React.createElement(
    "div",{id:"header"},[
    React.createElement("h1",{},"namaste react") ,React.createElement("ul",{},[React.createElement("li",{},"about us"),React.createElement("li",{},"Support us"),React.createContext("li",{},"Home")])
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);