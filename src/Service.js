import React from 'react'
import Navbar from './Navbar'

import video1 from '../src/Img/vid/production_id_4440974 (1080p).mp4'


export default function Service() {
  return (
    <>
    <Navbar/>
    <div className='ser'>
      <h1>Service</h1>
    </div>
    <div className='ser2'>
<video autoPlay={true} controls={true}>
<source src={video1} type='video/mp4'/></video>
<video autoPlay={true} controls={true}>
<source src={video1} type='video/mp4'/>
</video>
    </div>
<div className='ser3'>
<video autoPlay={true} controls={true}>
<source src={video1} type='video/mp4'/>
</video>
</div>
      
 </>
  )
}
