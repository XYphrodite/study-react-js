import styles from './Home.module.css' 
import car1 from './1.jpg' 
import {cars} from './cars.data'
import CarItem from './car-item/CarItem'

const Home = () => {
    return (
        <>
        <div>
            <h1>My catalog</h1>
            <div>
                {cars.length ? cars.map(car => (
                    <CarItem key={car.id} car={car}/>
                )) 
                : <p>There are no cars</p>}
                
            </div>
        </div>
        </>
    )
}

export default Home
