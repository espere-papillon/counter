import React, {ChangeEvent} from "react";
import Settings from "./Settings";
import {ScoreBoard} from "./ScoreBoard/ScoreBoard";
import {ClickButtons} from "./ClickButtons/ClickButtons";
import {Card, Container, Grid} from "@material-ui/core";

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

export function SettingsVariant2(props: propsType) {
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
                                  saveLocalStorageHandler={props.saveLocalStorageHandler} hide={true}/>
                    </Container>
                </Grid>
            </Card>
        </>
    )
}