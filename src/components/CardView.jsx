import React from "react";

const CardView = (props) =>{
    return(
        <div className='container'> 
            <div className="CardView">
                <img src={props.image} alt="couldn't load" class="image"/>
                <h3>{props.name}</h3>
                <h5>{props.field}</h5>
                <a href={props.btnLink} target="_blank"><button>Learn More</button></a>
            </div>
        </div>
    )
}

export default CardView;