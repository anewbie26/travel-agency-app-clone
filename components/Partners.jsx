import React from 'react'
import Flash from 'react-reveal/Flash';

function Partners() {
  return (
    <div className='flex items-center justify-evenly my-16 '>
      <Flash count={0.5}>
      <img src="/assets/partner3.png" alt="" className=''/>
      </Flash>
      <Flash delay={80} count={0.5}>
      <img src="/assets/partner2.png" alt="" />
      </Flash>
      <Flash count={0.5} delay={160}>
      <img src="/assets/partner1.png" alt="" />
      </Flash>
    </div>
  )
}

export default Partners
