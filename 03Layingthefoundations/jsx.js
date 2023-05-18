import React from "react";
import ReactDOM from "react-dom/client";

// const heading=<h1>Namaste react</h1>
// reaact element
const head=<h1 id="title" key="h1">Namaste React,Swapna</h1>;


// component-(i)functional component-new way of writing code (ii)class based component-old way of writing code
// const heading = () =>{
//     return <h1>This is react functional component</h1>
// }


// const heading=() => {
//     return (
//     <div><h1>Namaste react functiona component</h1><h2>this is h2 tag</h2></div>
//     );
// }









// some developer skip retrun
// const HeaderComponent = () => 
//      (
//     <div>
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);














// if react element inside the react component
// const heading=<h1>React element</h1>;

// const HeaderComponent = () => 
//      (
//     <div>
//         {heading}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);











// if I want functional component inside another functional component.I wpont work.as heading is no loner a variable

// const heading=()=>{return <h1>React element</h1>}

// const HeaderComponent = () => 
//      (
//     <div>
//         {heading}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);












// to make it work
// const heading = () => {
//     return <h1>React element</h1>
// };

// const HeaderComponent = () => 
//      (
//     <div>
//         <heading />
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);














// if we dont want to use </>
// const heading = () => {
//     return <h1>React element</h1>
// };

// const HeaderComponent = () => 
//      (
//     <div>
//         {heading()}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);












// when we have piece of jsx code, using {} we can add any piece of javascript code inside it
// const heading=()=>{return <h1>React element</h1>}
// const xyz=10;
// const HeaderComponent = () => 
//      (
//     <div>
//         {heading()}
//         {xyz}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);












// we can write console.log also
// const heading=()=>{return <h1>React element</h1>}
// const xyz=10;
// const HeaderComponent = () => 
//      (
//     <div>
//         {heading()}
//         {console.log(xyz)}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);










// we can do calucation also
// const heading=()=>{return <h1>React element</h1>}
// const xyz=10;
// const HeaderComponent = () => 
//      (
        
//     <div>
//         {heading()}
//         {xyz+100}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);
// root.render(<HeaderComponent()>);















// error if we use multiple children inside the functional components
// const heading=()=>{return <h1>React element</h1>}
// const xyz=10;
// const HeaderComponent = () => 
//      (
//     <div></div> 
//     <div>
//         {heading()}
//         {xyz+100}
//         <h2>Namaste react functiona component</h2>
//         <h2>this is h2 tag</h2>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);






