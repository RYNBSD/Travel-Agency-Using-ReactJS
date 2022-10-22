import React from 'react'

const SpecialsCard = ({ img, title, forRelaxing, days, nights, date, price }) => {
  return (
    <div className='specialCard f-center'>
      <div className='specialCard__head'>
        <div className="specialCard__head-img">
          <img src={img} />
        </div>
        <div className='specialCard__head-date'>
          <small>{date}</small>
        </div>
      </div>
      <div className='specialCard__body'>
        <div className='specialCard__body-relax'>
          {
            forRelaxing && (
              <div className='specialCard__body-relax-for'>
                Relax
              </div>
            )
          }
          {
            !forRelaxing && (
              <div className='specialCard__body-relax-not'>
                Adventure
              </div>
            )
          }
          <div className='specialCard__body-relax-days'>
            {days} days, {nights} nights
          </div>
        </div>
        <div className='specialCard__body-place'>
          {title}
        </div>
        <div className='specialCard__body-price'>
          <div className='specialCard__body-price-person'>
            <span>{price}$</span>/Person
          </div>
          <div className='specialCard__body-price-book'>
            Book now
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialsCard