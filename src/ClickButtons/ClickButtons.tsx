import React from "react";
import {ClickButton} from "./ClickButton/ClickButton";

type ClickButtonsType = {
    count: number
    increaseNumber: () => void
    resetCount: () => void
}

export function ClickButtons(props: ClickButtonsType) {

    const updateInfoFromLocalStorage = (valueKey: string): number => {
        let valueMaxAsString = localStorage.getItem(valueKey)
        let localStorageValue = 0
        if (valueMaxAsString) {
            localStorageValue = JSON.parse(valueMaxAsString)
        }
        return localStorageValue
    }

    const increaseDisable = props.count === updateInfoFromLocalStorage("maxValue")
    const resetDisable = props.count === updateInfoFromLocalStorage("minValue")
    return (
        <div className="Button">
            <ClickButton labelDisable={increaseDisable} title={"Click"} typeFunction={props.increaseNumber}/>
            <ClickButton labelDisable={resetDisable} title={"Reset"} typeFunction={props.resetCount}/>
        </div>
    )
}