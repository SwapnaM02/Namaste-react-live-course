import {restrautList} from "./contants";
import RestrauntCard from "./restocard";



// const Body = () => {
//     return (
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//     );
// };

// export default Body;
        












/** 2. built search bar  inside body.serach bar should be above resto-list.Hence we use <> 
  </>
 value is empty for now.here we get serach input and button but we can't write anything on the search input but the same code of input type="text" works fine in html. this shows the input type in html and react is different*/
 

// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"



// const Body = () => {
//     return (
//       <>
//       <div className="serach-container">
//         <input type="text" placeholder ="search" className="search-input" value="" />
//         <button className="search-btn">Search</button>
//       </div>
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;



/**3. how to make input work. use searchTxt variable inside the value attribute of the input tag.still we are not able to edit it. caz searchTxt="kfc" is a hard coded value.React uses one way data binding*/
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"



// const Body = () => {
//   const searchTxt="kfc"
//     return (
//       <>
//       <div className="serach-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchTxt} />
//         <button className="search-btn">Search</button>
//       </div>
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;












/**
 4.react uses one way data binding.we need to bind the data.Suppose if we have a variable searchTxt="kfc". we can put the value varible in the input tag.but we need to somehow modify the variable as when we are writing in the text box to make it work.from input we cant change the searchtext but we need to change the searchtext somehow.so we use onchange attribute that takes a callback function.that function is called whenever we write something in the input textbox . e is provided by react.but  we cant print on the input box what we are typing.
 */
//  import {restrautList} from "./contants";
//  import RestrauntCard from "./restocard"
 
 
 
//  const Body = () => {
//    const searchTxt="kfc"
//      return (
//        <>
//        <div className="serach-container">
//          <input type="text" placeholder ="search" className="search-input" value={searchTxt}  
//          onChange={(e) => {
//           // onchangeInput
//           // console.log("kjsdfkds");
//           console.log(e.target.value);
//           }}/>
//          <button className="search-btn">Search</button>
//        </div>
//        <div className="restaurant-list">
//          {
//            restrautList.map((resto) => {
//              return <RestrauntCard {...resto.data} key={resto.data.id} />
//            })
//          }
//          </div>
//          </>
//      );
//  };
// export default Body;










/**
 5. whenever we change/write in the input box.react re renders everything but value is alwyas kfc.caz searchTxt is hard coded value. we need to somehow modify searchtxt="KFC".
 it won't work like this as well*/
//  import {restrautList} from "./contants";
//  import RestrauntCard from "./restocard"
 
 
 
//  const Body = () => {
//    const searchTxt="kfc"
//      return (
//        <>
//        <div className="serach-container">
//          <input type="text" placeholder ="search" className="search-input" value={searchTxt} 
//          onChange = {(e) => {
//           searchTxt=e.target.value;
//          }} />
//          <button className="search-btn">Search</button>
//        </div>
//        <div className="restaurant-list">
//          {
//            restrautList.map((resto) => {
//              return <RestrauntCard {...resto.data} key={resto.data.id} />
//            })
//          }
//          </div>
//          </>
//      );
//  };
 
 
 
//  export default Body;









/** 6.to make it work. searchText ="kfc" shouldn't be local variable in react.whenever we want to change any variable inside reacr.then we need to maintain a variable like react variable.React variable is kind of state variable.Every componenet in react maintains a state.we can put all the variables into that state.everytime we have to create some local variables,we use "use state " in react. */ 
/** suppose if we need to creqate a local variables in react,we need to use a state variables.those state variables are created using usestate () hook.Hook is nothing but a normal function. */
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchText] = useState(); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchText}  onChange={  (e) =>{
//           console.log(e.target.value);
//         }}/>
//         <button className="search-btn">Search</button>
//       </div>
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;










// 7.to give default value to state variable
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchText] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchText}  onChange={  (e) =>{
//           searchTxt=e.target.value;
//         }}/>
//         <button className="search-btn">Search</button>
//       </div>
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;






// 8.we cant modify directly the searchText variable in react.
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   // const searchTxt="kfc"

//   const [searchText] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchText} 
//         onChange={(e) =>{
//           searchText=e.target.value;
//         }}/>
//         <button className="search-btn">Search</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;







// 9.to modify the varible or searchText in react.it is possible through usestate() hooks.
// we can only modify(searchtext) using a function.usestate gives us that function and that function we call it as 'setsearchInput', it is good convention to follow



// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
//           // e.target.value=>whatever you write in input box
//           setsearchInput(e.target.value);
//           console.log(searchInput);
//         }}
//         />
//         <button className="search-btn">Search</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;









// 10 to see if searchInput is working or not
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
//           // e.target.value=>whatever you write in input box
//           setsearchInput(e.target.value);
//           console.log(searchInput);
//         }}
//         />
//         <button className="search-btn">Search {searchInput}</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;








// 11 revision-
// 11.a Input doesnot work like this
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  
          
          
        
//         />
//         <button className="search-btn">Search {searchInput}</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;









// 11.b react uses one-way data bending
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   // const searchTxt="kfc" Normal js variable

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable usestate hook returns and array.1st element of the array is varable name and 2nd element of the array is function to update the variable.

  
  
//   // another way of creating state variables.
//   // const searchvar = useState();
//   // const[searchInput,setsearchInput]=searchvar  - destructing the array

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
//           // e.target.value=>whatever you write in input box
//           setsearchInput(e.target.value);
//           console.log(searchInput);
//         }}
//         />
//         <button className="search-btn">Search {searchInput}</button>
//         <h1>{searchInput}</h1>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;
/**the function automically gets a 'e' event property.from the event property,we can read whatever we are typing.updating and printing the value is known as two way data binding. */












// 12.create another state variable.if we click on search,searchclicked should be true.
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable

//   const [searchClicked,setsearchClicked] = useState();

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
//           // e.target.value=>whatever you write in input box
//           setsearchInput(e.target.value);
//           console.log(searchInput);
//         }}
//         />
//         <h1>{searchClicked}</h1>
//         <button className="search-btn" onClick={() => {
//           setsearchClicked("true")
//         }}>Search {searchInput}</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;










// 13.build the toggle
// import {restrautList} from "./contants";
// import RestrauntCard from "./restocard"
// import {useState} from "react";



// const Body = () => {
//   const searchTxt="kfc"

//   const [searchInput,setsearchInput] = useState("KFC"); // to create a state variable.searchText is a local state variable

 

//   // console.log(searchtext);
//     return (
//       <>
//       <div className="search-container">
//         <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
//           // e.target.value=>whatever you write in input box
//           setsearchInput(e.target.value);
//           console.log(searchInput);
//         }}
//         />
//         <h1>{searchClicked}</h1>
//         <button className="search-btn" onClick={() => {
//           if(searchClicked==="true")
//           setsearchClicked("false")
//           else
//           setsearchClicked("true")
//         }}>Search {searchInput}</button>
//       </div>
      
//       <div className="restaurant-list">
//         {
//           restrautList.map((resto) => {
//             return <RestrauntCard {...resto.data} key={resto.data.id} />
//           })
//         }
//         </div>
//         </>
//     );
// };

// export default Body;












// 15.



import {restrautList} from "./contants";
import RestrauntCard from "./restocard"
import {useState} from "react";

function filterData(searchInput,restos){
  const filter=restos.filter((restaurant)=>
    restaurant.data.name.includes(searchInput)
  );
  return filter;
}

const Body = () => {
  const searchTxt="kfc"

  const [searchInput,setsearchInput] = useState(""); // to create a state variable.searchText is a local state variable
  const[restos,setrestos]=useState(restrautList);

 

  // console.log(searchtext);
    return (
      <>
      <div className="search-container">
        <input type="text" placeholder ="search" className="search-input" value={searchInput}  onChange={(e) => {
          // e.target.value=>whatever you write in input box
          setsearchInput(e.target.value);
          console.log(searchInput);
        }}
        />
       
        <button className="search-btn" onClick={() => {
          const data=filterData(searchInput,restos);
          setrestos(data);
        }}>Search {searchInput}</button>
      </div>
      
      <div className="restaurant-list">
        {
          restos.map((resto) => {
            return <RestrauntCard {...resto.data} key={resto.data.id} />
          })
        }
        </div>
        </>
    );
};

export default Body;



        
     
     
     
     
         
         
        
  
      
