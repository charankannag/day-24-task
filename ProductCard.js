import React from "react";

export default function ProductCard(props) {
    const {data={}, onchange=(item) => {}, disabled=false}=props
    return (
            <div className="card mb-3">
        <div className="card-body">
        <div className="row">
        <div className="col-8">
            <div className="d-flex flex-column justify-content-center">
        <h3>{data.label||"Items not Available"}</h3>
        <p class="">{`₹${data.price}`||"Price not Available"}</p>
        </div>
        </div>
        <div className="col-4">
            <div className="d-flex flex-column justify-content-center"
            style={{height:"100%"}}
            >
        <button 
        disabled={disabled} 
        className={`btn ${ 
            disabled ? "btn-secondary" :"btn-primary"} btn-sm`}
        onclick={()=>onchange(data)}
        >
        {disabled ? "Added" : "Add to Cart"}
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}