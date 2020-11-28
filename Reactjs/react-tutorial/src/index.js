import React from "react"; // it is imported so that we can use JSX elements i.e HTML elments . Inside bibble is used ( bibble is js compiler that is used to convert modern js to browser compatible js)
import ReactDOM from "react-dom"; // it is used to manipulate the DOM of browser
import Heading from './components/Heading';
import Para from './components/Para';
import OrderList from './components/OrderList';
import Card from './components/Card'
import App from './App'
import sdata from './components/sData';

// // React.render(kya dikhana h , kidhr dikhana h , callback function)
// // Using div
// ReactDOM.render(
//   <div>
//     <h1 className = "heading">Happy Diwali</h1>
//     <li> 14 November 2020</li>
//     <h2>Using Div</h2>
//   </div>,
//   document.getElementById("root")
// );

// // Using array of JSX elements

// ReactDOM.render(
//   [
//     <h1>Happy Diwali</h1>,
//     <li> 14 November 2020</li>,
//     <h2>Using Array introduced in React v16.x.x.x</h2>,
    
//   ],
//   document.getElementById("root")
// );

// // Using React fragments

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Happy Diwali</h1>
//     <li> 14 November 2020</li>
//     <h2>Using React Fragment</h2>
   
//   </React.Fragment>,
//   document.getElementById("root")
// );

// // Using React Fragment syntactical  and its the ideal method to include miltiple JSX elements
// ReactDOM.render(
//   <>
//     <h1>Happy Diwali</h1>
//     <li> 14 November 2020</li>
//     <h2>Using React Fragment Syntactial Method introduced in React v16.2.x.x</h2>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//       <li>5</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// );
//  // Using Javascript Expressions : It is used to add Js expressions within JSX elemnts
//  // JS expressons doesnot include if else , for loop or any other statements
//  // Jvascript Literals : `${}`

//  let fname  = "Pankaj"
//  let lname  = "Arora"
// ReactDOM.render(
//   <React.Fragment>
//     <h1>{`my name is ${fname} ${lname}`}</h1>
//     <li> 24 November 2020</li>
//     <h2>Using React Fragment</h2>
   
//   </React.Fragment>,
//   document.getElementById("root")
// );

// //
// let currDate = new Date().toLocaleDateString();
// let currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <React.Fragment>
//     <h1>{`Current date : ${currDate}`}</h1>
//     <h1>{`Current Time : ${currTime}`}</h1>
//     <li> 24 November 2020</li>
//     <h2>Using React Fragment</h2>
   
//   </React.Fragment>,
//   document.getElementById("root")
// );

// //JSX Attributes i.e Html attributes
// // img is a self closing tag
// // those attributes wich are made up of 2 or more words , they need to be written in Camel Case 
// // like contentEditable that means first letter of 1st word should be small and first letter of 2 word should be large

// ReactDOM.render(
//   <React.Fragment>
//     <h1 contentEditable="true" >This is tutorial for JSX Attributes</h1>
//     <img src="https://picsum.photos/200/300" alt="random images"/>
//     <a href="www.facebook.com" target="_blank">
//     <img src="https://picsum.photos/300/300" alt="random images"/>
//       </a>

   
//   </React.Fragment>,
//   document.getElementById("root")
// );

// // How to use inline css style and internal css style : By using objects
// // convert kebab case to camel case : kebab case text-align , camel case textAlign
// // use single commas to define multiple propeties just like '"Courier New", Courier, monospace'
// const headingCSS = {
//   color: blue,
//     textAlign: 'center',
//     fontFamily: '"Courier New", Courier, monospace',
//     textTransform: 'capitalize',
// }

// ReactDOM.render(
//   <React.Fragment>
//     <h1 style={headingCSS} contentEditable="true" >This is tutorial for JSX Attributes</h1>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// React Components 

// ReactDOM.render(
//   <>
//   <App/>
//   </>,
//   document.getElementById("root")
// );

// Props : Here we will be using props
//Props are just custom attribute or properties for HTML elements or JSX elements
// here we are also using sData.jsx to get series data from components

// ReactDOM.render(
//   <>
//   <Card imgSrc={sdata[0].imgSrc} title={sdata[0].title} link={sdata[0].link}  />
//   <Card imgSrc={sdata[1].imgSrc} title={sdata[1].title} link={sdata[1].link}  />
//   <Card imgSrc={sdata[2].imgSrc} title={sdata[2].title} link={sdata[2].link}  />
//   <Card imgSrc={sdata[3].imgSrc} title={sdata[3].title} link={sdata[3].link}  />
//   </>,
//   document.getElementById("root")
// );

// Array Mapping : it is the method to loop all the elements of array by making their copy and thus doesnot
// effect the original array
// function(element,index,arr) = its a callback function that runs everytime for each element of array
//and thus return each element and their index value

const array= ['pankaj','shipu','ankush','suman','bunty']
const Maparray = array.map(function(element,index,arr){
console.log(index +" : "+ element);
})
// OR
ReactDOM.render(
  <>
  {sdata.map((element,index,arr)=>{
return(
  <Card key={element.id} imgSrc={element.imgSrc} title={element.title} link={element.link}  />
)
  })}
  </>,
  document.getElementById("root")
);

//Array Destucturing
let array  = ['java','js','c++','python','c','ruby','node.js']
let [top1,top2,top3,top4,top5,top6] = array;
console.log(top1 + " , " + top2 + " , " +top3 + " , " +top4 + " , " +top5 + " , " +top16);

// Spread operator
// It is used to basically company of one array or one object to another array or object respectively

let object1 ={
  name:"pankaj",
age:21,
gender:"male",

}

let object2 = {
  lastname:"arora",
  ...object1,  // spread operator
  college:"jcbose"
  
}
