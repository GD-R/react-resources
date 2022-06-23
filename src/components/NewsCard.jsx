
import React from 'react'


const NewsCard = (props) => {

   

  const { urlToImage, title, description, url } = props

  return (
    <div className="mb-4 p-0 sm:p-4 md:w-full"> {/* Card container */}
      <div className="bg-blue-700 group h-full border-2  inline-grid border-opacity-60 rounded-lg overflow-hidden shadow-lg">

        {/* :CARD IMAGE */}
        <img className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" src={urlToImage} alt="blog"/>

        {/* :CARD CATEGORY */}
       

        {/* :CARD BODY */}
        <div className="py-1 px-4">
          {/* ::Card title */}
          <p className="my-3 inline-block title-font text-xl text-white tracking-wide cursor-pointer">{title}</p>
          {/* ::Card excerpt */}
          <p className="line-clamp-6 overflow-hidden leading-relaxed text-gray-400">{description}</p>
        </div>

        {/* :CARD FOOTER */}
        <a href={url} target='_blank' className="px-4 py-2 inline-block text-xs title-font font-semibold text-black uppercase tracking-widest cursor-pointer hover:font-bold">Read More</a>
        
        
      </div>
    </div>
  )
}


NewsCard.defaultProps = {
    urlToImage: "",
    title: "Tech News",
    description: "Click Read More",
    url: ""
  }

export default NewsCard
