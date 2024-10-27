import Image from 'next/image'
import React from 'react'
type Props = {
    item:{
        id:number,
        icon:string,
        type:string,
        number:number
    }
}
const AppartmentTypeCard = ({item}:Props) => {
  return (
    <div className='rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300'>
        <Image src={item.icon} alt={item.type} width={50} height={50}/>
        <div className='mt-12'>
            <h1 className='text-lg font-bold'>{item.type}</h1>
            <p className='mt-2 text-sm text-gray-700'>{item.number} Properties</p>
        </div>
    </div>
  )
}

export default AppartmentTypeCard