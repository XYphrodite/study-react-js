

import { useMemo, useState } from 'react';
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm';
const res = await fetch('http://localhost:3000/cars');
const carsData = await res.json();

const Home = () => {
    let [cars, setCars] = useState(carsData);
    console.log(cars);
    return (
        <>
        <div>
            <h1>My catalog</h1>
            <CreateCarForm setCars={setCars}/>
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
