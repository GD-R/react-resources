import React from 'react'
import Card from './Card'
import { htmlJsData } from './data'

const Section = () => {

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {htmlJsData.map((item) => {
         return ( <Card key={item.id} list={item.id} number={item.num} update={item.date} /> )
    })}
    </div>
  )
}

export default Section
