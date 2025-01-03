"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import Image from "next/image";

function Header() {
  const {user}=useKindeBrowserClient();
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
      <div>
        

        </div>
        { <div>
          <Image
          src={user && user.photoURL ? user.photoURL : "https://banner2.cleanpng.com/20240104/kpx/transparent-yellow-circle-yellow-circular-shape-with-white-face-tilted-1710940294899.webp"}
          width={35}
          height={35}
          alt="user"
          className="rounded-full"
/>

        </div> }
      </div>
    
  )
}

export default Header
