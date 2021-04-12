import React from "react";
import {ClickButton} from "./ClickButton/ClickButton";

type ClickButtonsType = {
    count: number
    maxValue: number
    minValue: number
    increaseNumber: () => void
    resetCount: () => void
}

export function ClickButtons(props: ClickButtonsType) {

    const increaseDisable = props.count === props.maxValue
    const resetDisable = props.count === props.minValue
    return (
        <div className="Button">
            <ClickButton labelDisable={increaseDisable} title={"Click"} typeFunction={props.increaseNumber}/>
            <ClickButton labelDisable={resetDisable} title={"Reset"} typeFunction={props.resetCount}/>
        </div>
    )
}