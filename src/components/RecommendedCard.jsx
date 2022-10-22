import React from 'react'

import StarIcon from '@mui/icons-material/Star';
import RoomIcon from '@mui/icons-material/Room';

import { yellow, red } from '@mui/material/colors';

const RecommendedCard = ({ img, place, star, title }) => {
  return (
    <div className='recommendedCard'>
        <div className='recommendedCard__img'>
            <img src={img}/>
            <div className='recommendedCard__img-star f-center'>
                <StarIcon sx={{color: yellow[500]}}/>
                {star}
            </div>
        </div>
        <div className='recommendedCard__desc'>
            <h1>{title}</h1>
            <div className='recommendedCard__desc-place'>
                <RoomIcon sx={{color: red[500]}}/>
                {place}
            </div>
        </div>
    </div>
  )
}

export default RecommendedCard