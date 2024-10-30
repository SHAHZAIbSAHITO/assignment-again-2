import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>HomePage
      <br />
      <br />
      <Link href="/header">Go to Header Page</Link> <br />
      <Link href="/about">Go to About Page</Link>
      
    </div>
  )
}

export default Homepage
