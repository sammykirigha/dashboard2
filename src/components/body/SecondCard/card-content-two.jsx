import React, { useState } from "react";
import "./card-content-two.css";
import { Card } from "@mui/material";
import CardHeader from "../../reusableCompts/cardHeader/card-header";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CardBody from "../../reusableCompts/cardBody/card-body";
import CardFooter from "../../reusableCompts/cardFooter/card-footer";

const optionsB = [
    {
        label: "This Month",
        value: { num: "567", price: "7865.65" },
    },
    {
        label: "Next Month",
        value: { num: "467", price: "9565.78" },
    },
    {
        label: "Last Month",
        value: { num: "127", price: "2065.43" },
    },
];

const CardContentTwo = () => {
    const [orders, setOrders] = useState({ num: "100", price: "5688.33" });

    const ordersChange = (e) => {
        const { value } = e.target;
        setOrders(JSON.parse(value));
    };
    return (
        <Card className="card-content-two-box">
            <CardHeader
                headerText="Orders"
                icon={<FormatListBulletedIcon className="icon" />}
            >
                <select
                    onChange={ordersChange}
                    className="select"
                    data-testid="select"
                    value={orders}
                >
                    {optionsB.map((option) => (
                        <option value={JSON.stringify(option.value)}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </CardHeader>
            <CardBody>
                <div className="orders-up">
                    <div className="orders-up-section1">
                        <div className="orders-received">Orders Received: </div>
                        <div className="orders-quantity">{orders.num}</div>
                    </div>
                    <div className="orders-up-section2">
                        <div className="orders-received">Earnings: </div>
                        <div className="orders-quantity">${orders.price}</div>
                    </div>
                </div>
            </CardBody>
            <CardFooter linkText="10 free tips to increase your sales" />
        </Card>
    );
};

export default CardContentTwo;
