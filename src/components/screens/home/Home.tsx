

import CarItem from './car-item/CarItem'
const res = await fetch('http://localhost:3000/cars');
const cars = await res.json();
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
