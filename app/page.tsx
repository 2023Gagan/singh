'use client'

import React from 'react';

import Image from 'next/image';

const page = () => {
  const time = new Date()

  const day = time.getDate();
  const month = time.toLocaleString('default', { month: 'short' });
  const year = time.getFullYear();
  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day} ${month} ${year} ${hour}:${minute}`;

  console.log(formattedDate)

  return (
    <div className='bg-black text-white h-fit w-screen flex flex-col justify-center items-center align-middle'>
      {/* barcode */}
      <div className='pt-3 pb-5 flex flex-row align-middle justify-center items-center'>
        {/* Pic */}
        <div className='pr-5'>
          <Image 
            src='/barcode.jpg'
            alt=''
            width={30}
            height={30}
          />
        </div>
        <div>
          {/* Title */}
          <div className='font-semibold'>
            Barcode
          </div>

          {/* Time */}
          <div className='font-light text-sm'>
            {formattedDate}, CODE_128
          </div>
        </div>
      </div>

      {/* number */}
      <div className='font-bold text-3xl pb-5'>
        225596
      </div>

      {/* picture */}
      <div>
        <Image 
          src='/Kumarpanama.jpg'
          alt=''
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default page