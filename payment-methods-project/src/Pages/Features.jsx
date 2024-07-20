import React from 'react'
import { Navbar } from '../components';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import { card } from '../assets';







const Features = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
        <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing"
        className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full 
        white__gradient'/>
        <div className='absolute z-[0] -left-1/2
        bottom-0 w-[50%] h-[50%] rounded-full 
        pink__gradient'/>
      </div>
      

      <div className={layout.sectionInfo} >
          <h2 className={styles.heading2} >
           Easily control your <br className='sm:block hidden'/>
             billing and invoicing.</h2>
            <p  className={`${styles.paragraph} max-w-[470px]
            mt-5`}>
              Manage unplanned expenses and larger one-off purchases,
             and earn rewards on your daily spend.
            </p>

            <div className='flex flex-row flex-wrap
            sm:mt-10 mt-6'>
              <img src={apple} alt="apple_store"
              className='w-[128px] h-[42px] 
              object-contain mr-5 cursor-pointer' />
              <img src={google} alt="gooogle_play"
              className='w-[128px] h-[42px] 
              object-contain  cursor-pointer' />
            </div>
      </div>
    </section>
    <button type="button" className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none rounded-full ${styles}
      `}>
        Get Started
    </button>
    <section className={layout.section}>
       <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />
         in few easy steps.</h2>
         <p className={`${styles.paragraph}
         max-w-[470px] mt-5`}>
           Earn $60 each month when you spend $500 or
            more per month for the first four months.
         </p>
       </div>

       <div className={layout.sectionImg}>
           <img src={card} alt="card" className='w-[100%] h-[100%]' />
       </div>
   </section>
  
    </div> 
  )
}


 

export default Features