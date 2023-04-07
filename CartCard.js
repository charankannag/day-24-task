import React from "react";

export default function CartCard(props) {
    const {data={}, onRemove=(item) => {}}=props
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
        
        className={`btn btn-danger btn-sm`}
        onclick={()=>onRemove(data)}
        >
        Delete
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}