import styles from './Home.module.css' 
import car1 from './1.jpg' 

const Home = () => {
    return (
        <>
        <div>
            <h1>My catalog</h1>
            <div>
                <div className={styles.item }>
                    <div className={styles.imgBox}>
                        <img src={car1} alt="" />
                    </div>
                    <div className={styles.info}>
                        <h2>My car</h2>
                        <p>$100 000</p>
                    </div>
                    <button>Read more</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
