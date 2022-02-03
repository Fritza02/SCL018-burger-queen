import React from "react";
import "../components/css/Dropdowns.css";

const Dropdowns = ({ show, showMenu, setTable }) => {
const handleClick = (table) =>{
    showMenu(false);
    setTable(table);
}
return (
    <>
    {!show?
        <div >
            <button onClick={() => showMenu(true)}>Mesas</button>
        </div>
        :
        <div className="dropdownsGarzon">
        <button onClick={()=>{handleClick('Mesa 1')}}>Mesa 1</button>
        <button onClick={()=>{handleClick('Mesa 2')}}>Mesa 2</button>
        <button onClick={()=>{handleClick('Mesa 3')}}>Mesa 3</button>
        <button onClick={()=>{handleClick('Mesa 4')}}>Mesa 4</button>
        </div>
        }
    </>
    
);
};

export default Dropdowns; 