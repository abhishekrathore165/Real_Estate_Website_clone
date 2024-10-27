import Image from 'next/image';
import React from 'react'
import { BiCalendar, BiMessage } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

type Props={
    item: {
        id: number;
        date: string;
        comment: string;
        title: string;
        shortDescription: string;
        image: string;
    }
}

const BlogCard = ({item}:Props) => {
  return (
    <div className='bg-white rounded-md overflow-hidden'>
        <div>
            <Image src={item.image} alt={item.title} width={300} height={300} className='w-full'/>
            <div className="p-6 ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <BiCalendar className='text-rose-500'/>
                        <span className="text-sm text-gray-700">{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiMessage className='text-rose-500'/>
                        <span className="text-sm text-gray-700">{item.comment}</span>
                    </div>
                </div>
                <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-lg text-gray-700">{item.title}</h1>
                <p className="text-gray-500 text-base">{item.shortDescription}</p>
                <div className="mt-4 flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                    <span className='font-bold'>Read More</span>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard