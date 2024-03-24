import React from 'react'

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className='flex text-white items-center gap-3 text-[15px] hover:underline underline-offset-8 font-semibold cursor-pointer transition duration-700 ease-in-out mb-3'>
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
