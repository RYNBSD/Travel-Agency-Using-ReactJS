import React from 'react'

import CommentsCard from '../components/CommentsCard'

import { comments } from '../data/data'

import "./css/Comments.css"

const Comments = () => {
  return (
    <section className='comments'>
      <div className='container f-center'>
        {
          comments.map(comment => <CommentsCard 
            author={comment.author}
            desc={comment.desc}
            title={comment.title}
            img={comment.img}
            star={comment.star}
          />)
        }
      </div>
    </section>
  )
}

export default Comments