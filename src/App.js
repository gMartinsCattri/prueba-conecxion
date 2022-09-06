import React, {useState, useEffect} from 'react';
import './App.css';


export default function App() {
  
  const [restaurants, setRestaurants] = useState([{}]);
  // const [results, setResult] = useState([{}])

  const [storage, setStorage] = useState([{}])

  useEffect(() => {
    fetch('https://alfred.oohtv.com/multimedia/images')
    .then(res => res.json())
    .then(res => setRestaurants(res[1].path));
    console.log("name", restaurants);

  
  

  }, [restaurants]);


  const result = restaurants.filter(restaurants => restaurants.toString().charAt(2) === "p");
  console.log("result", result);
  // const result = restaurants.filter(restaurant => restaurant.charAt(2) === "p");
  
  // setResult(result);
  

  console.log("resultados", storage)

  
    return (
      
      <div>
        {result.map((resultado, index) => (
          <div key={index}>
          <p>{resultado}</p>
          {setStorage(resultado)}
          
          </div>
          
        ))}
       <p>{result}</p>
      </div>
    );
  }

// const App = () => {
//   function addClassActiveOnMenu (){
//     console.log("kjca")
//     document.querySelector(".menu-restaurant").classList.toggle("active");
//   }


//   const [restaurant, setRestaurant] = useState([{}]);

//   useEffect(() => {
//     fetch('http://74.208.169.34:9100/restaurant/all')
//     .then(res => res.json())
//     .then(res => setRestaurant(res));
//     console.log("name", restaurant);

//   }, [restaurant]);

//   return (
//     <div>
//       {restaurant.map((restaurant,index) => (
//         <div key={index}>
//           <h2>Name: {restaurant.name}</h2>

//           {restaurant.map((restaurant, index) => (
//             <div key={index}>
//               <h2>Task: {restaurant}</h2>
//             </div>
//           ))}

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// // import React, {useState, useEffect} from 'react';
// // import './App.css';

// // const App = () => {


  
// //   const [name, setName] = useState([{}]);

// //   useEffect(() => {
// //     fetch('https://cattri.ddns.net/minideneva/channels/1') 
// //     .then(res => res.json()) 
// //     .then(res => setName(res.playlist[1].content));
// //     console.log("name", name)
    
// //   }, [name]); 

// //   return <><div className="users">
// //     <video src={name}></video>
// //   </div>
// //   <div>
    
// //     </div>
// //     </>;
// // }

// // export default App;

// // // import "./script.js"
// // // import "./App.css"
// // // export default function App() {

  
// // //   function toggleMute() {

// // //     var video=document.getElementById("myVideo");
  
// // //     video.muted = !video.muted;
  
// // //   }
// // //   function myTimeout () {setTimeout(toggleMute,  5000);}

// // //   myTimeout()
// // //   return (
// // //     <div className="App">
// // //       <h1>Hello CodeSandbox</h1>
      
// // //        <video muted   loop autoPlay >
// // //     <source src="http://74.208.169.34/videos/MexiquenseTV.mp4" type="video/mp4"></source>
// // //     Your browser does not support HTML5 video.
// // // </video>
// // // <button type="button" onclick="som()" class="dragBtn"><i class="fas fa-bars"></i></button>
// // //     </div>
// // //   );
// // // }

// import React from 'react'
// import Draggable from 'react-draggable'

// function App() {

//   function togleconsolelog (){
//     console.log("togle")
//   }
//   return (
//     <div style={{width: '100%', height: '100vh', backgroundColor: 'black'}}>
//       <Draggable><div onClick={togleconsolelog} style={{width: "40px", height: "40px", backgroundColor: 'blue'}}></div></Draggable>

//     </div>
//   )
// }

// export default App

