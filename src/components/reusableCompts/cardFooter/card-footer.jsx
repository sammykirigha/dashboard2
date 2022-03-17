import React from "react";
import "./card-footer.css";

const CardFooter = ({ linkText, footerIcon }) => {
    return (
        <div className="visitors-info">
            <span className="config-link">{linkText}</span>
            {footerIcon}
        </div>
    );
};

export default CardFooter;
