import React from 'react'

import StarIcon from '@mui/icons-material/Star';

import { yellow } from '@mui/material/colors';

const CommentsCard = ({ img, title, desc, star, author }) => {
  return (
    <div className='commentsCard'>
        <div className='doubleQuotes'/> 
        <p>{desc}</p>
        <h3>{author}</h3>
        <h2>{title}</h2>
        <div className='commentsCard__img'>
            <img src={img}/>
            <div className='commentsCard__img-star'>
                <StarIcon sx={{color: yellow[500]}}/>
                {star}
            </div>
        </div>
    </div>
  )
}

export default CommentsCard