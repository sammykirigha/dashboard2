import { CssBaseline, Grid, Link } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Hero.css";

const HeroSection = () => {
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item xs={12}>
                    <div className="background">
                        <h3 data-testid="hero">Welcome Samuel!</h3>
                        <div className="right">
                            <Link className="hero-link">
                                app.vetrinalive.it/fenoh-store
                            </Link>
                            <OpenInNewIcon className="hero-icon" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default HeroSection;
