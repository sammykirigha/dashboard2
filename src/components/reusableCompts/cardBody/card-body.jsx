import React from "react";
import "./card-body.css";

const CardBody = ({ children }) => {
    return (
        <div className="card-body">
            {children}
            {/* <span className="visitors-number">{values}</span> */}
        </div>
    );
};

export default CardBody;
