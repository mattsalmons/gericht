import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>750 Milford Street, Fryeburg, NH, 04037</p>
        <p className='p__opensans'>555-867-5309</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Hours</h1>
        <p className='p__opensans'>Mon - Fri:</p>
        <p className='p__opensans'>11am - 10pm</p>
        <p className='p__opensans'>Sat - Sun:</p>
        <p className='p__opensans'>11am - Midnight</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 CloudsRest Branding & Design</p>
    </div>
  </div>
);

export default Footer;
