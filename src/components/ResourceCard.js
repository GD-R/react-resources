import React from 'react'

const ResourceCard = (props) => {
 
    const { name, link } = props;
     
  return (
    <>
      <div class="h-32 my-4 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 flex justify-center items-center p-3 rounded-xl border-2 border-slate-100 shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative" onclick="navigator.clipboard.writeText('bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400').then(function(){ alert('Bluelagoo copied to clipboard!') })"><div class="text-slate-200 text-center"><div><a href={link} target="_blank">{name}</a></div></div></div>
    </>
  )
}

export default ResourceCard
