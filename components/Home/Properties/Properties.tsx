import SectionHeading from '@/components/Helper/SectionHeading'
import { properties } from '@/data/data'
import React from 'react'
import CardProperties from './CardProperties'

const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Discover Our Properties' />
            <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                {
                    properties.map((item,i)=>{
                        return (
                            <div key={item.id} data-aos="fade-up" data-aos-delay={`${i*150}`} data-aos-anchor-placement='top-center'>
                                  <CardProperties item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Properties