import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import Card from './card/page'
import Bottom from './bottom/page'
import Footer from './footer/page'

const page = () => {
  return (
    <div>
<Navbar/>
<Hero/>

<Card />
<Footer/>
    </div>
  )
}

export default page