import { list } from 'postcss'
import React from 'react'

const Card = (props) => {

    const { list, number, update } = props
  
  return (

    <div class="p-4">
        <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">

        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/videoseries?list=${list}`} allow="accelerometer; autoplay;  picture-in-picture"/>

            <div class="px-6 pt-4 mb-2 text-xl font-bold">
                <span>{number} videos</span>
            </div>

            <p className='px-6 pt-4 mb-2'>{update}</p>
        </div>
    </div>
    
  )
}

export default Card
