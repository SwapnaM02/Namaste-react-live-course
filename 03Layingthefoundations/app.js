import React from "react";
import ReactDOM from "react-dom/client";



const heading=React.createElement("h1",{id:"title",key:"h1"},"heading1");
console.log(heading);
const heading2=React.createElement("h2",{id:"title",key:"h2"},"heading2");
const container=React.createElement("div",{id:"container"},[heading,heading2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);



