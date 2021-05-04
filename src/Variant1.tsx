import React, {ChangeEvent} from "react";
import Settings from "./Settings";
import {ScoreBoard} from "./ScoreBoard/ScoreBoard";
import {ClickButtons} from "./ClickButtons/ClickButtons";
import {AppBar, Button, Card, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

type propsType = {
    maxValue: number
    minValue: number
    count: number
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    saveLocalStorageHandler: () => void
    labelDisabled: boolean
    increaseNumber: () => void
    resetCount: () => void
}

export function Variant1(props: propsType) {
    return (
        <>
            <Card elevation={10}>
                <Grid container style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    padding: "20px",
                    margin: "auto",
                    width: "100%",
                    height: "400px"
                }}>
                    <Container fixed style={{height: "200px", width: "300px"}}>
                        <Container fixed>Setting</Container>
                        <Settings maxValue={props.maxValue} minValue={props.minValue}
                                  changeMaxValue={props.changeMaxValue}
                                  changeMinValue={props.changeMinValue} labelDisabled={props.labelDisabled}
                                  saveLocalStorageHandler={props.saveLocalStorageHandler} hide={false} />
                    </Container>
                    <Container fixed style={{height: "200px", width: "300px"}}>
                        <Card elevation={7}
                              style={{fontSize: "40px", fontFamily: "sans-serif", textAlign: "center"}}>
                            <ScoreBoard counter={props.count} maxValue={props.maxValue}/>
                        </Card>
                        <ClickButtons count={props.count} maxValue={props.maxValue} minValue={props.minValue}
                                      increaseNumber={props.increaseNumber} resetCount={props.resetCount} hide={false} />
                    </Container>
                </Grid>
            </Card>
        </>
    )
}