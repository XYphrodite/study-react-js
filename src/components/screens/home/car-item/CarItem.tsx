import styles from '../Home.module.css'

const CarItem = ({car}) => {
    return (
    <div key={car.id} className={styles.item }>
        <div className={styles.imgBox}>
            <img src={car.image} alt="" />
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
)
}

export default CarItem