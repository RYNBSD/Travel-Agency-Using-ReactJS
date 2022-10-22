import React from 'react'

import "./css/Special.css";

import { specialsUpcomingOffers } from "../data/data";

import SpecialCard from "../components/SpecialsCard"

const Special = () => {
  return (
    <div className='special'>
      <div className='title'>
        <h1>Special Upcoming Offers</h1>
      </div>
      <center>
        <div className='section-title'>
          <button>Team</button>
          <button>Couple</button>
          <button>Family</button>
        </div>
      </center>
      <div className='container f-center'>
        <div className='d-grid'>
          {
            specialsUpcomingOffers.map(special => <SpecialCard 
              key={special.title}
              img={special.img}
              title={special.title}
              forRelaxing={special.forRelaxing}
              days={special.days}
              nights={special.nights}
              date={special.date}
              price={special.price}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Special