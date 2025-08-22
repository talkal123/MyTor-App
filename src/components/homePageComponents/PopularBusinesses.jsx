import React from 'react'
import CardHomePage from '../helpers/CardHomePage'

const PopularBusinesses = ({data,userDetails}) => {
 return (
    <div className='mt-10 p-5'>
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-lg'>Popular Businesses</h1>
        <span className='text-sm text-gray-500 cursor-pointer'>View all</span>
      </div>
      <div className='p-1 mt-5 flex flex-col gap-5'>
        {data.length === 0 ? (
          <div className=' flex items-center justify-center'>
            <p>No business</p>
          </div>
          
        ): (
          data.slice(0,3).map((business,index) => (
          <CardHomePage key={index} data={business} userDetails={userDetails}/>
        ))
        )}
      </div>
    </div>
    </div>
  )

}

export default PopularBusinesses
