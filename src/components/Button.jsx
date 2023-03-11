import React from 'react'

const Button = (props) =>(
   <button type='Button' className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium text-[18px] ${props.styles} text-primary outline-none`}>{props.title}</button>
  )


export default Button