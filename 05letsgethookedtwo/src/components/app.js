import React from "react";
import ReactDOM from "react-dom/client";
// import Title from "./components/Title";


// default import
// import HeaderComponent from "./components/Header";




// named import
// import {Title} from "./components/Title";


// to import all the named components in the file
// import * as obj from "./components/Header";




// both header and title are named export
// import {Title,HeaderComponent} from "./components/Header";

// header default export and title named export
// import HeaderComponent,{Title} from "./components/Header";



// final recommended way
import HeaderComponent from "./Header";
import Body from "./body";
import Footer from "./footer";
import { IMG_CDN_URL } from "./contants";



  



  

  
  
  
    
  
  
  
  
  
  
  
  
  
  
    const Applayout =() => (
        <>
         <HeaderComponent/> 
         {/* <obj.HeaderComponent/> */}
         <Body/>
         <Footer/>
         </>
        
       );
  
  
  
  
      const root= ReactDOM.createRoot(document.getElementById("root"));
      // root.render(<HeaderComponent/>);
      root.render(<Applayout/>);
    




//