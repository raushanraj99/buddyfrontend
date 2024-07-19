import React, { useContext, useEffect } from 'react'
import Headers from '../Component/Headers'
import { context } from '../main'



function Home() {

  const {userdata} = useContext(context);


  return (
    <div>
      <p className='text-3xl text-[green] font-bold'>Home page </p>
      <p>Welome to Home page {userdata?.name}</p>
    </div>
  )
}

export default Home