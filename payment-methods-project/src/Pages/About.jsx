import React from 'react'
import { Navbar } from '../components';
import styles, { layout } from '../style';
import { people01, people02 } from '../assets';

const About = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
        
       <section className={`${layout.section} `}>
       <div className={layout.sectionInfo} >
         <h2 className={`${styles.heading2} `}>
         Infinite ambitions. <br />
        One financial technology platform.
         </h2>
         <p className={`${styles.paragraph} ${styles.flexCenter} max-w-[470px]
            mt-5  mt-5 ml-10` }>
         When we launched in 2006, our ambition was simple: help businesses grow. 
         We started with payments, taking an engineering-first approach to solving some of the most complex challenges. 
         Today, we are the preferred financial technology platform of many of the world's leading brands. <br />
         We did this by working with exceptional talent, prioritising success over ego, and having fun along the way. <br />
      To continue driving towards our long-term ambitions, we're looking for innovative problem solvers, 
      strategic thinkers, and colleagues we can count on.
         </p>
         </div>
       </section>
       <h2 className={`${styles.heading2} text-right mr-10`}>
        Met our team leaders!</h2>
       <section className={`${layout.section} text-left ml-5`}>
       <div className={layout.sectionImgReverse}>
              <img src={people02} alt="people" 
              className='' />
            </div>
            <div>
        <p className={`${styles.paragraph} ${styles.flexCenter} text-center`}>
        “We are not led by short-term trends, and hire specifically to meet our long-term needs. <br className='sm:block hidden' />
        To scale our culture of speed and autonomy as we grow, we keep our talent standards high <br className='sm:block hidden' />
           and only hire exceptional people that quickly gain traction.”
        </p>
        <h2 className='font-poppins font-size-normal mt-5 text-white'>
          -Peter Saltzman, Director
        </h2>
        </div>
        
            </section>

            <div className='absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full 
        white__gradient'/>

            <section className={`${layout.section} ml-20`}>
                <div>   
                <p className={`${styles.paragraph} ${styles.flexCenter} text-center`}>
            "Our operational employees keep us pushing forward. <br className='sm:block hidden' />
             They're legal experts, compliance officers, number crunchers, <br className='sm:block hidden' />
              support team members, HR, communications specialists, and more."
            </p>
            <h2 className='font-poppins font-size-normal text-white mt-5'>
              -Jane Forbes, Finance Director
            </h2>
            </div>
            <div className={layout.sectionImg}> 
                <img src={people01} alt="people"
                className='' />
                </div>
            </section>
            
     </div>
  )
}


export default About