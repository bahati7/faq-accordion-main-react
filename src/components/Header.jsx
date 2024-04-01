import React from 'react';
import StarIcon from "./StarIcon";


const Header = () => {
  return (
    <div className='flex flex-row justfy-center items-center'>
        <StarIcon/>
        <h1 className='text-4xl font-bold ml-5'>FAQs</h1>
        
    </div>
  )
}

export default Header