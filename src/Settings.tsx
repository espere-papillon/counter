import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SettingsInputs} from "./SettingsInputs/SettingsInputs";
import {SettingsButton} from "./SettinsButton/SettingsButton";
type PropsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    saveLocalStorageHandler: () => void
    labelDisabled: boolean
}
function Settings(props: PropsType) {


    return (
        <div className="App">
            <div>
                <SettingsInputs maxValue={props.maxValue} minValue={props.minValue} changeMaxValue={props.changeMaxValue} changeMinValue={props.changeMinValue}/>
            </div>
            <div className="Button">
                <SettingsButton labelDisabled={props.labelDisabled} saveLocalStorageHandler={props.saveLocalStorageHandler}/>
            </div>
        </div>
    );
}

export default Settings;
