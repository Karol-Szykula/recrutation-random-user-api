import React from 'react'

import './aboutus.css'

const AboutUs = (props) => (
    <div className='about-us__wrapper'>
        <div className="about-us">
            Our company offers support in implementations of multi-channel eCommerce software.
        </div>
        <div class="about-us__item">
            <div class="section-function__container-text">
                B2C
            </div>
        </div>
        <div class="about-us__item">
            <div class="section-function__container-text">
                CRM
            </div>
        </div>
        <div class="about-us__item">
            <div class="section-function__container-text">
                B2B
            </div>
        </div>
        <div class="about-us__item">
            <div class="section-function__container-text">
                PIM
            </div>
        </div>
        <div class="about-us__item">
            <div class="section-function__container-text">
                Conversion and usability of existing systems
            </div>
        </div>
    </div>
)

export default AboutUs