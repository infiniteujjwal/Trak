import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({txt ,className , navigateTo}) {
  const navigate = useNavigate()

 
  return (
    <button onClick={()=>navigate(`/${navigateTo}`)}
    className={`bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-10 rounded-xl btnShadow cursor-pointer ${className}`}>
            {txt}</button>
  )
}

export default Button