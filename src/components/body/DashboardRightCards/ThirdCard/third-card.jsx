import { Card, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import React from "react";
import CardHeader from "../card-header";
import CardBody from "../../../reusableCompts/cardBody/card-body";
import { Box } from "@mui/system";

const ThirdCard = () => {
    return (
        <Card>
            <CardHeader
                icon={<PeopleAltOutlinedIcon />}
                headerText={"Invite friend"}
            />
            <CardBody>
                <Box style={{ width: "90%" }}>
                    <Typography component="p" className="invite-paragraph">
                        <strong style={{ color: "#00C48C" }}>
                            Receive 50 products
                        </strong>{" "}
                        by inviting a friend who subscribes to a plan. Your
                        friend will receive a 30% discount coupon valid for any
                        plan.
                    </Typography>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ThirdCard;
