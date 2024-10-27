'use client'
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';
type Props = {
    buildings: {
        id: number;
        title: string;
        description: string;
        image: string;
    }
}

const BuildingCard = ({ buildings }: Props) => {
    return (
        <Tilt className='rounded-lg shadow-md p-4 bg-white'>
            <div className='w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full'>
                <Image src={buildings.image} alt={buildings.title} width={40} height={40} />
            </div>
            <div className="p-2">
                <p className='mt-6 text-red-600 font-bold text-xl'>0{buildings.id}</p>
                <p className='text-lg text-gray-700 font-bold mt-2 mb-2'>{buildings.title}</p>
                <p className='text-sm opacity-70 text-gray-700'>{buildings.description}</p>
            </div>
        </Tilt>

    )

}

export default BuildingCard