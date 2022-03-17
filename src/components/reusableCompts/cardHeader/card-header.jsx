import React from "react";
import "./card-header.css";

const CardHeader = ({ icon, headerText, children }) => {
    return (
        <div className="card-content1">
            <div className="card-header">
                {icon}
                <span data-testid="values" className="card-content-span1">
                    {headerText}
                </span>
            </div>
            <div className="card-header">{children}</div>
        </div>
    );
};

export default CardHeader;
