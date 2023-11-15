

import { useMemo } from 'react';
import CarItem from './car-item/CarItem'
const res = await fetch('http://localhost:3000/cars');
const cars = await res.json();

const Home = () => {
    const filteredCars = useMemo(
        () => cars.filter(car => car.price>=1000), []
        );
    
    return (
        <>
        <div>
            <h1>My catalog</h1>
            <div>
                {filteredCars.length ? filteredCars.map(car => (
                    <CarItem key={car.id} car={car}/>
                )) 
                : <p>There are no cars</p>}
                
            </div>
        </div>
        </>
    )
}

export default Home
