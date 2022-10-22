import React from 'react'

import "./css/Recommended.css";

import { recommendedDestination } from "../data/data"

import RecommendedCard from '../components/RecommendedCard';

const Recommended = () => {
  return (
    <section className='recommended'>
      <div className='title'>
        <h1>Recommended Destination</h1>
      </div>
      <center>
        <div className='section-title'>
          <button>Popularity</button>
          <button>Adventure</button>
          <button>Beach</button>
        </div>
      </center>
      <div className='container f-center'>
        {
          recommendedDestination.map(reco => <RecommendedCard 
            img={reco.img}
            star={reco.star}
            place={reco.place}
            title={reco.title}
          />)
        }
      </div>
    </section>
  )
}

export default Recommended