'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const IndexPage = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router])

  return (
    <div>
        Error 404
    </div>
   
  )
}

export default IndexPage