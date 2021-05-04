import React from "react";
import {ClickButton} from "./ClickButton/ClickButton";
import {Button, Container, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";

type ClickButtonsType = {
    count: number
    maxValue: number
    minValue: number
    increaseNumber: () => void
    resetCount: () => void
    hide: boolean
}

export function ClickButtons(props: ClickButtonsType) {

    const increaseDisable = props.count === props.maxValue
    const resetDisable = props.count === props.minValue
    return (
        <Container fixed style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Grid container style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <ClickButton labelDisable={increaseDisable} title={"Click"} typeFunction={props.increaseNumber}/>
                <ClickButton labelDisable={resetDisable} title={"Reset"} typeFunction={props.resetCount}/>
                {props.hide ?
                    <NavLink style={{textDecoration: "none"}} to="/settings">
                        <Button style={{margin: "20px"}} variant="contained" color="primary">
                            Settings
                        </Button>
                    </NavLink> :
                    <></>
                }
            </Grid>
        </Container>
    )
}