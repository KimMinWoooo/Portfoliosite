import React from 'react'

import Lottie from 'react-lottie-player'


import lottieJson from '/public/animation'

 function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}

export default Animation;