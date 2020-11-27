import React from "react";

function Card(props) {
    return (
        <>
    <div className="container">
      <div className="card">
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div>
    <span>{props.title}</span>
        <p>A Original Netflix Seires</p>
      </div>
      <a href={props.link} target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
  </>
    )
  
}
export default Card
