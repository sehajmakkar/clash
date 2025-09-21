import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <Image src="/clash.png" alt="Clash Royale Logo" width={300} height={300} />
      </div>
      <div>
        <h1 className='text-6xl font-extrabold p-5 bg-gradient-to-r from-[#278BFF] to-[#FF5151] bg-clip-text text-transparent'>WE CLASH!</h1>
      </div>
      <Link href="/login">
        <Button size='lg' className='cursor-pointer'>Login</Button>
      </Link>
      </div>
  )
}

export default Hero