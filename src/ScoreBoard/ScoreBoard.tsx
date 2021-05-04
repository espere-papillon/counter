import React from "react";
import {Paper} from "@material-ui/core";

type ScoreBoardType = {
    counter: number
    maxValue: number
}

export function ScoreBoard (props: ScoreBoardType) {

    const textColor = props.counter === props.maxValue ? "textRed" : "textColor"

    return (
    <Paper style={{height: "100px", paddingTop: "50px"}} variant={"outlined"} elevation={4}>{props.counter}</Paper>
    )
}