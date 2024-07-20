
import styles from "../style";




const Testimonials = () => 
   (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter}
    flex-col relative`}>
          <div/>

          <div className="w-full flex justify-between items-center
          md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>
                Apply for a credit card online <br className="sm:block hidden"/>
                and get a response in 60 seconds.</h1>
                <div className="w-full md:mt-0 mt-6"> 
                  <p className={`${styles.paragraph}
                  text-left max-w-[450px]`}>
                    Whether you’re looking for a credit card with no monthly
                   or international transaction fees, travel insurance or the ability to earn rewards, 
                    compare our range of cards to find the best credit card for your needs.
                  </p>
                </div>

          </div>
    </section>
  )


export default Testimonials