import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHBNyikPbf5gwAAAYcXT3UAkTRFE-je1uMZNNe_VIQVBjit8qHPTmt6_QXI_eQkAgNOzW2NcZLIr4P8C2cpoK6HLfgZUJlGf_Hoo1n12d0jQc1qoh71TOJtvie9cEJA9y7d9BU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvandana26' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Vandana19singh' target="_blank"><BsGithub/></a>
        <a href='https://dribble.com' target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default headerSocials