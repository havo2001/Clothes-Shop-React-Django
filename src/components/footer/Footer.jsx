import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container grid">
        <a href="/index.html" className='logo'>Mollywlove</a>
        <div className="footer__social">
          <p className='social-title section__subtitle'>Follow us</p>
          <div className='social-icons'>
            <a href='https://www.facebook.com/' className='uil uil-facebook-f social-icon' aria-label="Facebook"></a>
            <a href='https://www.instagram.com/' className='uil uil-instagram-alt social-icon' aria-label="Instagram"></a>
            <a href='https://web.telegram.org/' className="uil uil-telegram social-icon" aria-label="Telegram"></a>
            <a href='https://vk.com/' className='uil uil-vk social-icon' aria-label="VK"></a>
          </div>
        </div>
        <div className='footer__contact'>
          <p className='contact-title section__subtitle'>Contact Us</p>
          <div className='info'>
            <p className='phone'>+7 0123456789</p>
            <p className='instagram '>@mollywlove</p>
            <p className='address'>Moscow, Russia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
