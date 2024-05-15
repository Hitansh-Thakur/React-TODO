import React from 'react'

const Button = ({text,onclick}) => {
  return (
    <button className='bg-indigo-800 hover:bg-indigo-700 px-10 text-slate-50 rounded-md py-2 ' onClick={onclick}>{text}</button>
  )
}

export default Button