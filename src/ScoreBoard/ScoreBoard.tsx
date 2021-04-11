import React from "react";

type ScoreBoardType = {
    counter: number
}

export function ScoreBoard (props: ScoreBoardType) {
    const updateInfoFromLocalStorage = (valueKey: string): number => {
        let valueMaxAsString = localStorage.getItem(valueKey)
        let localStorageValue = 0
        if (valueMaxAsString) {
            localStorageValue = JSON.parse(valueMaxAsString)
        }
        return localStorageValue
    }
    const textColor = props.counter === updateInfoFromLocalStorage("maxValue") ? "textRed" : "textColor"

    return (
    <div className={textColor}>{props.counter}</div>
    )
}