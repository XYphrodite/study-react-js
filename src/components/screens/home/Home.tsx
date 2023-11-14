import styles from './Home.module.css' 
import car1 from './1.jpg' 
import {cars} from './cars.data'

const Home = () => {
    return (
        <>
        <div>
            <h1>My catalog</h1>
            <div>
                {cars.length ? cars.map(car => (
                    <div key={car.id} className={styles.item }>
                    <div className={styles.imgBox}>
                        <img src={car1} alt="" />
                    </div>
                    <div className={styles.info}>
                        <h2>{car.name}</h2>
                        <p>
                            {new Intl.NumberFormat('ru-RU',{
                                style: 'currency',
                                currency:'USD'
                            }).format(car.price)}
                        </p>
                    </div>
                    <button>Read more</button>
                </div>
                )) 
                : <p>There are no cars</p>}
                
            </div>
        </div>
        </>
    )
}

export default Home
