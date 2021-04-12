import React from "react";

type ScoreBoardType = {
    counter: number
    maxValue: number
}

export function ScoreBoard (props: ScoreBoardType) {

    const textColor = props.counter === props.maxValue ? "textRed" : "textColor"

    return (
    <div className={textColor}>{props.counter}</div>
    )
}