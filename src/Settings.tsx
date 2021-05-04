import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SettingsInputs} from "./SettingsInputs/SettingsInputs";
import {SettingsButton} from "./SettinsButton/SettingsButton";
import {Container, Grid, Paper} from "@material-ui/core";

type PropsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    saveLocalStorageHandler: () => void
    labelDisabled: boolean
    hide: boolean
}

function Settings(props: PropsType) {


    return (
        < >
            <Paper elevation={7}>
                <SettingsInputs maxValue={props.maxValue} minValue={props.minValue}
                                changeMaxValue={props.changeMaxValue} changeMinValue={props.changeMinValue}/>
            </Paper>
            <>
                <SettingsButton labelDisabled={props.labelDisabled}
                                saveLocalStorageHandler={props.saveLocalStorageHandler} hide={props.hide} />
            </>
        </>
    );
}

export default Settings;
