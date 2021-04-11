import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SettingsInputs} from "./SettingsInputs/SettingsInputs";
import {SettingsButton} from "./SettinsButton/SettingsButton";
type PropsType = {
    setCount: (value: number) => void
}
function Settings(props: PropsType) {

    const updateInfoFromLocalStorage = (valueKey: string): number => {
        let valueMaxAsString = localStorage.getItem(valueKey)
        let localStorageValue = 0
        if (valueMaxAsString) {
            localStorageValue = JSON.parse(valueMaxAsString)
        }
        return localStorageValue
    }

    const [maxValue, setMaxValue] = useState<number>(updateInfoFromLocalStorage("maxValue"))
    const [minValue, setMinValue] = useState<number>(updateInfoFromLocalStorage("minValue"))

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(event.currentTarget.value))
    }

    const changeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(event.currentTarget.value))
    }

    const [stateDisabled, setStateDisabled] = useState<boolean>(false)

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
        setStateDisabled(labelDisabled())
    }, [maxValue, minValue])

    const saveLocalStorageHandler = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setMaxValue(updateInfoFromLocalStorage("maxValue"))
        localStorage.setItem("minValue", JSON.stringify(minValue))
        setMinValue(updateInfoFromLocalStorage("minValue"))
        setStateDisabled(labelDisabled())
        props.setCount(minValue)
    }

    return (
        <div className="App">
            <div>
                <SettingsInputs maxValue={maxValue} minValue={minValue} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue}/>
            </div>
            <div className="Button">
                <SettingsButton labelDisabled={stateDisabled} saveLocalStorageHandler={saveLocalStorageHandler}/>
            </div>
        </div>
    );
}

export default Settings;
