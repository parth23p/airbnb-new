'use client';
import React from 'react'
import Image from 'next/image';
import {useRouter} from 'next/navigation';

type Props = {}

const Logo=()=>{
    const router=useRouter();

  return (
    <Image
    onClick={()=>router.push('/')}
    alt=""
    className='hidden md:block cursor-pointer'
    height={100}
    width={100}
    src="/images/logo.png"
    />
  )
}

export default Logo;