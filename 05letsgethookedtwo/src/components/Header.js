// using default export


// const Title = () => {
//     return (
//       <a href="#">
//         <img
//           className="logo"
//           src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
//           alt="logo"
//         />
//       </a>
//     );
//   };





//   const HeaderComponent =( ) =>{
//     return (
//       <div className="header">
//         <Title />

//         <div className="nav-items">
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Cart</li>
//           </ul>

//         </div>
//       </div>
//     ); 
//   };


//   export default HeaderComponent;









// named export
//  export const Title = () => {
//   return (
//     <a href="#">
//       <img
//         className="logo"
//         src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
//         alt="logo"
//       />
//     </a>
//   );
// };





// const HeaderComponent =( ) =>{
//   return (
//     <div className="header">
//       <Title />

//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>

//       </div>
//     </div>
//   ); 
// };


// export default HeaderComponent;














// exporting headercomponent and title
// export const Title = () => {
//   return (
//     <a href="#">
//       <img
//         className="logo"
//         src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
//         alt="logo"
//       />
//     </a>
//   );
// };





// export const HeaderComponent =( ) =>{
//   return (
//     <div className="header">
//       <Title />

//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>

//       </div>
//     </div>
//   ); 
// };


// export default HeaderComponent;











// header is exported by default and title is named export
// export const Title = () => {
//   return (
//     <a href="#">
//       <img
//         className="logo"
//         src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
//         alt="logo"
//       />
//     </a>
//   );
// };





//  const HeaderComponent =( ) =>{
//   return (
//     <div className="header">
//       <Title />

//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>

//       </div>
//     </div>
//   ); 
// };


// export default HeaderComponent;














// final recommended way to export
 const Title = () => {
  return (
    <a href="#">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        alt="logo"
      />
    </a>
  );
};





 const HeaderComponent =( ) =>{
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  ); 
};


export default HeaderComponent;