import React, {ChangeEvent} from 'react';
import {InputSetting} from "./InputSetting/InputSetting";
import {Container, Grid, Paper} from "@material-ui/core";


export type propsSettingsInputsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SettingsInputs(props: propsSettingsInputsType) {
    return (
        <Grid>
            <InputSetting title={"MAX"} changeValue={props.changeMaxValue} value={props.maxValue}/>
            <InputSetting title={"MIN"} changeValue={props.changeMinValue} value={props.minValue}/>
        </Grid>
    )
}