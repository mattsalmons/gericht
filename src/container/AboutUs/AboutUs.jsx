import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding id='about'">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='g letter' />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt='about_spoon' className="spoon__img"/>
        <p className="p__opensans">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt='about_spoon' className="spoon__img" />
        <p className="p__opensans">
          Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Suspendisse potenti nullam ac tortor. Aliquet nibh praesent tristique magna sit amet.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
