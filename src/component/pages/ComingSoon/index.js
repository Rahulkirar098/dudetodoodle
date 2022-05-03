import React, { useState } from 'react'
import './style.css'

export const ComingSoon = () => {



    return (
        <div className="coming_soon">
            <div className='kiro'>
                <img className='kiro_img' src={'./images/comingsoon/Cat.svg'} alt='kiro' />
            </div>
            <div className='coming_soon_text'>
                <h1 className='coming_soon_dude'>COMING SOON</h1>
                <h1 className='middle_text'>“We are preparing something exciting
                    & amazing for you”</h1>
                <img src={'./images/comingsoon/logo.svg'} className='logo_dude_to_doodle' alt='dude_to_doodle_logo' />
            </div>

            <div>
                <div className='lucy_mobile_center'>
                    <img src={'./images/comingsoon/Dog.svg'} className='lucy_img' alt="Dog" />
                </div>
                <div className='social_details'>
                    <div className='social_icon in_desktop_hidden'>
                        <a href='https://www.behance.net/dudetodoodle' target='_blank'><img src={'./images/comingsoon/Behance.png'} className='social_media_icon1' alt="Dog" /></a>
                        <a href='https://www.linkedin.com/company/dudetodoodle/' target='_blank'><img src={'./images/comingsoon/linkedin.png'} className='social_media_icon2' alt="Dog" /></a>
                        <a href='https://www.instagram.com/dude_to_doodle/' target='_blank'><img src={'./images/comingsoon/instagram.png'} className='social_media_icon3' alt="Dog" /></a>
                    </div>
                    <div>
                        <h2 className='font_change'><span className='in_mobile_hidden'>Contact us :</span> hello@dudetodoodle.in</h2>
                    </div>
                    <div className='social_icon in_mobile_hidden'>
                        <a href='https://www.behance.net/dudetodoodle' target='_blank'><img src={'./images/comingsoon/Behance.png'} className='social_media_icon1' alt="Dog" /></a>
                        <a href='https://www.linkedin.com/company/dudetodoodle/' target='_blank'><img src={'./images/comingsoon/linkedin.png'} className='social_media_icon2' alt="Dog" /></a>
                        <a href='https://www.instagram.com/dude_to_doodle/' target='_blank'><img src={'./images/comingsoon/instagram.png'} className='social_media_icon3' alt="Dog" /></a>
                    </div>
                    <div>
                        <h2 className='font_change'>&copy;dudetodoodle studio di design creativo 2022</h2>
                    </div>
                </div>
            </div>


        </div>
    )
}
