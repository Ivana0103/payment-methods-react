import React from 'react'
import { Navbar } from '../components';
import styles, { layout } from '../style';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



const images = [
  {
    original: "https://picsum.photos/id/238/580/450/",
    thumbnail: "https://picsum.photos/id/238/150/100/",
  },
  {
    original: "https://picsum.photos/id/2/580/450/",
    thumbnail: "https://picsum.photos/id/2/250/150/",
  },
  {
    original: "https://picsum.photos/id/864/580/450/",
    thumbnail: "https://picsum.photos/id/864/250/150/",
  },
  {
    original: "https://picsum.photos/id/5/580/460/",
    thumbnail: "https://picsum.photos/id/5/250/150/",
  },
  {
    original: "https://picsum.photos/id/4/580/460/",
    thumbnail: "https://picsum.photos/id/4/250/150/",
  },
];



const Gallery = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
        <section className={`${layout.section}`}> 
        <div className='absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full 
        white__gradient'/>
         <div className='absolute z-[3] -left-1/2
        top-0 w-[40%] h-[50%] rounded-full 
        pink__gradient'/>
        <div>
          <h2 className={`${styles.heading2}`}>
            We provide our payment methods services <br className='sm:block hidden' />
           all over the world!
          </h2>
          <p className={`${styles.paragraph}`}> 
          Operator of cash accounts in US dollars HookBank is a secure <br className='sm:block hidden' />
           and robust Digital System getting popular <br className='sm:block hidden' />
            all over the world nowadays.
          </p>
        </div>
        </section>
        <ImageGallery 
          items={images}
          showPlayButton={true}
          showFullscreenButton={false}
          slideInterval={1000}
          slideOnThumbnailOver={true}
          showIndex={true}
        />
        <hr />
          <div>
            <h2 className={`${styles.heading2} text-center`}>
              Best in class mobile and digital payment</h2>
          </div>
        
    </div>
  )
}



export default Gallery