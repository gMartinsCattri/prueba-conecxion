/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./App.css"
import fishersLogo from "./img/fishers1.png"

function RestaurantHours() {

  // BLOCK #1 : Generating restaurants dynamically when consuming book your table service
  
  fetch('http://74.208.169.34:9100/restaurant/all', {
    headers: new Headers({
      'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let htmlRestaurantsList = "";

      data.map((value) => {
        htmlRestaurantsList += `
        <div className="tooglees">
          <img src=${fishersLogo} alt="" style="border-radius: 50%; height: 461px;"/>
        </div>
        `;
      });
      document.querySelector(".menu-restaurant").innerHTML = htmlRestaurantsList;
    })
    .catch(err => console.log(err));
  
  fetch('http://74.208.169.34:9100/restaurant/by-id?restId=1', {
    headers: new Headers({
      'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
    })
  })
    .then(response => response.json())
    .then(data => {
      let htmlTimeSlots = "";
      let counter = 0;
      data.slots.map((value) => {
        const slotTime = new Date(value.timeSlot.toString()).toLocaleTimeString('es-MX', {
          hour: 'numeric', minute: 'numeric'
        });

        htmlTimeSlots += `
        <li style="--i:${counter};">
          <a href="#"><div className="reserva-tu-mesa"><p>${slotTime}</p></div></a>
        </li>
        `;

        counter = counter + 1;
      });

      document.querySelector(".menu-restaurant-container").innerHTML = htmlTimeSlots;
    })
    .catch(err => console.log(err));

    // BLOCK #3 : Consuming QRCode service & including it into the UI
    /*fetch('http://localhost:9100/qr-code/', {
      headers: new Headers({
        'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
      })
    })
      .then(response => response.blob())
      .then(data => {

        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(data);
        document.querySelector("#img").src = imageUrl;

      })
      .catch(err => console.log(err));*/

  // Demo by http://creative-punch.net

    function addClassActiveOnMenu (){
        console.log("kjca")
        document.querySelector(".menu-restaurant").classList.toggle("active");
      }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      
      <img id="img" alt='scan me'/>

      <div className="menu-restaurant">
        <div className="tooglees" onClick={addClassActiveOnMenu}>
          <img style={{ borderRadius: "50%", height: "461px" }} src={fishersLogo} alt="" />
        </div>
        <div className="menu-restaurant-container">
          <li style={{ "--i": 0 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 1 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 5 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 6 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
          <li style={{ "--i": 7 }}>
            <a href="#"><div className="reserva-tu-mesa"><p>11:00pm</p></div></a>
          </li>
        </div>
      </div>
    </div>
  )

  /* BLOCK #1 : Generating restaurants dynamically when consuming book your table service,*/

  // eslint-disable-next-line no-unreachable
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div className="menu-restaurant">
          <div className="tooglees" onClick={addClassActiveOnMenu}>
            <img style={{ borderRadius: "50%", height: "461px" }} src={fishersLogo} alt="" />
          </div>
          <div className="menu-restaurant-container">

          </div>
        </div>
      </div></>
  ) 

  
  /* BLOCK #2 : Generating dynamically the time slots by specific restaurant id,
  <li> tags inside className "menu-restaurant-container" are generated dynamically, check lines 40 - 56.

  return (
    
  ) */

  // BLOCK #3 : Consuming QRCode service & including it into the UI
  /*return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      
      <img id="img" alt='scan me'/>

    </div>
  )*/

}

export default RestaurantHours