import React from "react";
import "./card-body.css";

const CardBody = ({ children }) => {
    return (
        <div className="card-body">
            {children}
        </div>
    );
};

export default CardBody;
