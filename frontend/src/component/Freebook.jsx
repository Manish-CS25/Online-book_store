import React from 'react'
import list from '../public/list.jpg';

function Freebook() {
    const filterData = list.filter((item) => item.category === "Free")
  return (
    <>    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>Free Books</h1>

    </div>
    </>

  )
}

export default Freebook
