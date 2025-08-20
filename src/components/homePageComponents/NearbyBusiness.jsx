import React from 'react'
import CardHomePage from '../helpers/CardHomePage';

const NearbyBusiness = ({data, category,userDetails}) => {
  
    
    const newCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const newData = data.filter(b => b.address.toLowerCase().includes(userDetails.city));

    
    
  return (
    <div className='mt-10 p-5'>
    <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-lg'>Nearby {newCategory}s</h1>
        <span className='text-sm text-gray-500 cursor-pointer'>View all</span>
      </div>
      <div className='p-1 mt-5 flex flex-col gap-2'>
        {newData.length === 0 ? (
          <div className=' flex items-center justify-center'>
            <p>No business</p>
          </div>
          
        ): (
          newData.slice(0,3).map((business,index) => (
          <CardHomePage key={index} data={business} userDetails={userDetails} />
        ))
        )}
      </div>
    </div>
    </div>
  )
}

export default NearbyBusiness
