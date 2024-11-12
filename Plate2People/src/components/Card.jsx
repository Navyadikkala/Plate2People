import React from 'react'

function Card({title, image, body}) {
  return (
    <div className='w-[240px] bg-rosepink p-4 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer border-2 border-black'>
      <img src={image} alt="" className='h-[200px] rounded-full'/>
      <br />
      <div className=''>
        {body}
      </div>
    </div>
  )
}

export default Card