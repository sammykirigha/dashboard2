import * as React from "react";
import "./card-content.css";
import Card from "@mui/material/Card";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CardHeader from "../../../reusableCompts/cardHeader/card-header";
import CardBody from "../../../reusableCompts/cardBody/card-body";
import CardFooter from "../../../reusableCompts/cardFooter/card-footer";

const options = [
    {
        label: "This Month",
        value: "1235",
    },
    {
        label: "Next Month",
        value: "4563",
    },
    {
        label: "Last Month",
        value: "7890",
    },
];

const selectStyle = {
    border: '0px',
    with: '100px',
    outline:'0px'
}

export const CardContent = () => {
    const [values, setValues] = React.useState(5678);

    const onChange = (e) => {
        const { value } = e.target;
        setValues(value);
    };
    return (
        <Card className="card-content-box">
            <CardHeader
                color={'red'}
                headerText="Visitors"
                icon={<RemoveRedEyeOutlinedIcon className="icon" />}
            >
                <select
                    onChange={onChange}
                    style={selectStyle}
                    data-testid="select"
                    value={values}
                >
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </CardHeader>
            <CardBody>
              <span className="visitors-number">{values}</span>
            </CardBody>
            <CardFooter
                footerIcon={
                    <ArrowForwardOutlinedIcon className="footer-icon" />
                }
                linkText={"You need more visits? Contact us!"}
            />
        </Card>
    );
};
