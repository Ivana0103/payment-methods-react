import React from 'react';
import { Navbar } from '../components';
import styles, { layout } from '../style';
import {  footerLinks, socialMedia } from '../constants';

const Contact = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <section className={`${styles.section}`} >
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>
            Get in touch with an expert.
          </h2>
          <h4 className='font-poppins font-normal mt-5 mb-20 text-white'>
          You deserve a partner that’s built to support your changing needs. <br />
          Complete the form below to learn why nearly 90% of Fortune 1000® companies choose to work with us.
          </h4>
        </div>
      </section>
         <div>
          <h2 className={styles.heading2}>
            You can fin us here!
          </h2>
         </div>
        <div className='map-responsive'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.740372821455!2d20.374632700000003!3d44.72491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6df2b96ab49f%3A0xa5c59384ab850efc!2z0JzQuNC70L7RgNCw0LTQsCDQi9C40YDQuNGb0LAgMTMsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1721385887846!5m2!1ssr!2srs" 
        className='w-[450px] h-[150px]'
        allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>

        <div className='flex-[1] w-full flex flex-row justify-between flex-wrap
        md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => {
            return  (
              <div key={footerLink.key} className='flex flex-col ss:my-0
              my-4 min-w-[105px]'>
                  <h4 className='font-popins font-medium text-[18px]
                  leading-[27px] text-white'>
                    {footerLink.title}
                  </h4>
                  <ul className='list-none mt-4'>
                    {footerLink.links.map((link, index) => (
                      <li key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px]
                      text-dimWhite hover:text-secondary cursor pointer 
                      ${index !== footerLink.links.length - 1 ?
                        'mb-4' : 'mb-0' }`}>
  
                          {link.name}
                      </li>
                    ))}
                  </ul>
              </div>
            )
          })}
        </div>
            <div className='w-full flex justify-between
            items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
              <p className='font-poppins font-normal text-center
              text-[18px] leading-[27px] text-white'>
                2024 HooBank. All Rights Reserved
              </p>
              <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                      <img 
                      key={social.id}
                      src={social.icon}
                      alt={social.id}
                      className={`w-[21px] h-[21px] object-contain cursor-pionter 
                        ${index !== socialMedia.length - 1 ?
                          'mr-6' : 'mr-0'}`}
                      />
                    ))}
              </div>
            </div>


    </div>
  )
}




export default Contact