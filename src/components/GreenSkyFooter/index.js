import './GreenSkyFooter.scss'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

export function GreenSkyFooter() {
  return (
    <footer>
      <div className='footer-container'>
        <p className='footer-container__copyright'>© 2022 GreenSky</p>
        <p className='footer-container__construction'> In construction... 🚧⚡️ </p>
        <div className='footer-container__network'> 
          <a href='https://t.me/salviega'>
          <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href='https://www.linkedin.com/in/salviega/'>
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/salviega/greensky'>
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  )
}