import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import Card from './card/page'
import Bottom from './bottom/page'

const page = () => {
  return (
    <div>
<Navbar/>
<Hero/>
<Bottom/>
<Card />
    </div>
  )
}

export default page