import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {ScoreBoard} from './ScoreBoard/ScoreBoard';
import {ClickButtons} from "./ClickButtons/ClickButtons";
import Settings from "./Settings";

function App() {

    const updateInfoFromLocalStorage = (valueKey: string): number => {
        let valueMaxAsString = localStorage.getItem(valueKey)
        let localStorageValue = 0
        if (valueMaxAsString) {
            localStorageValue = JSON.parse(valueMaxAsString)
        }
        return localStorageValue
    }

    const [count, setCount] = useState<number>(updateInfoFromLocalStorage("minValue"))

    function resetCount() {
        setCount(updateInfoFromLocalStorage("minValue"))
    }

    function increaseNumber() {
        let newCount = count
        newCount >= updateInfoFromLocalStorage("maxValue") ? newCount = updateInfoFromLocalStorage("minValue") : newCount++;
        setCount(newCount)
    }

    const [maxValue, setMaxValue] = useState<number>(updateInfoFromLocalStorage("maxValue"))
    const [minValue, setMinValue] = useState<number>(updateInfoFromLocalStorage("minValue"))

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(event.currentTarget.value))
    }

    const changeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(event.currentTarget.value))
    }

    const labelDisabled = (): boolean => {
        let localStorageMaxValue = updateInfoFromLocalStorage("maxValue")
        let localStorageMinValue = updateInfoFromLocalStorage("minValue")
        if (maxValue < 0 || minValue < 0)
            return true
        if (maxValue <= minValue)
            return true
        return maxValue === localStorageMaxValue && minValue === localStorageMinValue;

    }

    useEffect(() => {
        setMaxValue(updateInfoFromLocalStorage("maxValue"))
        setMinValue(updateInfoFromLocalStorage("minValue"))
    }, [])

    useEffect(() => {
        labelDisabled()
    }, [maxValue, minValue])

    const saveLocalStorageHandler = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setMaxValue(updateInfoFromLocalStorage("maxValue"))
        localStorage.setItem("minValue", JSON.stringify(minValue))
        setMinValue(updateInfoFromLocalStorage("minValue"))
        labelDisabled()
        setCount(minValue)
    }

    return (
        <div>
            <Settings maxValue={maxValue} minValue={minValue} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue} labelDisabled={labelDisabled()} saveLocalStorageHandler={saveLocalStorageHandler} />
            <div className="App">
                <div>
                    <ScoreBoard counter={count} maxValue={maxValue} />
                </div>
                <div>
                    <ClickButtons count={count} maxValue={maxValue} minValue={minValue} increaseNumber={increaseNumber} resetCount={resetCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;
