import SectionHeading from '@/components/Helper/SectionHeading'
import { buildings } from '@/data/data'
import React from 'react'
import BuildingCard from './BuildingCard'

const Building = () => {
  return (
    <div className='pt-16 pb-16 bg-gray100'>
         <div className="w-[80%] mx-auto">
            <SectionHeading heading='Explore Building Feature '/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
                {
                    buildings.map((buildings,i)=>{
                        return (
                            <div key={buildings.id} data-aos="fade-left" data-aos-delay={`${i*150}`} data-aos-anchor-placement='top-center'>
                                <BuildingCard buildings={buildings}/> 
                            </div>
                        )
                    })
                }
            </div>
         </div>
    </div>
  )
}

export default Building