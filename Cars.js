import {useState} from 'react';

function Cars(){
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
    });

    const updateColor=()=>{
        setCar(previousState=>{
            return{...previousState,color:"blue"}
        });
    }
    return(
            <div>
                <p>Your car is a {car.year} {car.brand} {car.model} of {car.color} color.</p>
                <button type="button" onClick={updateColor}>Blue</button>
            </div>
    );
}

export default Cars;