import React from 'react'

function card({item}) {
    console.log(item)
  return (
     
      <>
      <div className='mx-3 my-3 p-3 ml-3 '>
      <div className="card bg-base-100 w-80 h-81 shadow-xl">
  <figure>
    <img className="rounded-t-sm "
      src={item.image}
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price} ₹</div>
      <div className="cursor-pointer py-1 rounded-full border-[2px] hover:bg-pink-400 hover:text-white duration-200 px-2">Buy Now</div>
    </div>
  </div>
</div>
      </div>
      </>
    
  )
}

export default card
