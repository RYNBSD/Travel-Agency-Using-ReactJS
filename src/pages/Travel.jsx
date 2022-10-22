import React from 'react'

import "./css/Travel.css"

import travelBackground from "../SVGs/travelImg.svg"

import { travel } from "../data/data";

const Travel = () => {
  return (
    <section className='travel'>
      <div className='container f-center'>
        <div className='travel__img'>
          <img src={travelBackground}/>
          {
            travel.map((travel, index) => (
              <div className={`travel__img-data travel-data-${index}`} key={index}>
                <h2>{travel.num}+</h2>
                <small>{travel.type}</small>
              </div>
            ))
          }
        </div>
        <div className='travel__text'>
          <h1>Travel Any Corner of The World With Us</h1>
          <p>
            Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us. Would you explore nature paradise in the world, let’s find the best destination in world with us. Would you explore nature paradise in the world, let’s find the best destination in world with us.
          </p>
          <button>Contact Us</button>
        </div>        
      </div>
    </section>
  )
}

export default Travel