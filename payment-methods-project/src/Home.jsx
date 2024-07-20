import styles from "./style";

import {
	Navbar, Hero, Stats,
	Testimonials,
} from "./components";





export const Home = () => {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>

				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<Hero />
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>

				</div>
			</div>
			<div className={`bg-primary ${styles.paddingX} $styles.flexStart`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Testimonials />
				</div>
			</div>


		</div>
	)
}





export default Home
