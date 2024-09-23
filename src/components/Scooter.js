import { useState } from "react"



//multiple state 
function Scooter()
{
    //const [color,setColor]=useState("Red")
    //const [brand,setBrand]=useState("Honda")
    //const [model,setModel]=useState("Activa 6G")
    //const [year,setYear]=useState("2020")

    //using single state with object 
    const[scooter,setScooter]=useState
    (
        {
            color:"Red",
            brand:"Honda",
            model:"Activa 6G",
            year:"2020"
        }
    );

    function updateColour()
    {
        setScooter(previousState=>{
            return{...previousState,color:"Blue"}
        })
    }
    


    return<>
    {/*<h1>My Scooter</h1>
    <p>Color: {color}</p>
    <p>Brand : {brand}</p>
    <p>Model : {model}</p>
    <p>Year : {year}</p>*/}


    <h1>My Scooter</h1>
    <p>Color: {scooter.color}</p>
    <p>Brand : {scooter.brand}</p>
    <p>Model : {scooter.model}</p>
    <p>Year : {scooter.year}</p>
    <button onClick={updateColour}>Change colour</button>
    </>
}
export default Scooter