import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100 '>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading='Check Our Blogs'/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
                {
                    blogs.map((item,i)=>{
                        return(
                            <div key={item.id} data-aos="zoom-out" data-aos-delay={`${i*150}`} data-aos-anchor-placement='top-center'>
                                 <BlogCard item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Blog