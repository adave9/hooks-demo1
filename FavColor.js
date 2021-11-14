import React from "react";
import {useState} from 'react';
function FavColor(){

    const [color,setColor]=useState("RED");
    
    return(
        <div>
            <h2>My favourite color is {color} !</h2>
            <button type="button" onClick={()=>setColor("BLUE")}>Blue</button>&nbsp;&nbsp;
            <button type="button" onClick={()=>setColor("GREEN")}>Green</button>&nbsp;&nbsp;
            <button type="button" onClick={()=>setColor("WHITE")}>White</button>&nbsp;&nbsp;
        </div>
    );
}

export default FavColor;