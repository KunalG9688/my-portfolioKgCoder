import React from 'react'
import logoKg from '../assets/img/logoKg.png'

const FooterPage = () => {
  return (
    <div className="copyright footer-custom">
      <div><i class="bi bi-c-circle"></i> Copyright © 2024 KG Coder. Made by KG Coder. All rights reserved.
            <div><img className='logo-footer' src={logoKg} /></div></div>
            
    </div>
  )
}

export default FooterPage