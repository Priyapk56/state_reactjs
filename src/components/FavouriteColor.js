import { useState } from "react";




function FavouriteColor() {
    //let color="Blue"
    const [color, setColor]=useState('Blue')
    return  <>
    <h1>My Favourite Colour is {color}</h1>
    <button onClick={()=>{setColor('Red')}}>Change Colour</button>
    </>
}
export default FavouriteColor;