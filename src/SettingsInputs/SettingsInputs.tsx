import React, {ChangeEvent} from 'react';
import {InputSetting} from "./InputSetting/InputSetting";


export type propsSettingsInputsType = {
    maxValue: number
    minValue: number
    changeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SettingsInputs (props: propsSettingsInputsType) {
    return (
        <div className="textColor">
            <InputSetting title={"MAX"} changeValue={props.changeMaxValue} value={props.maxValue} />
            <InputSetting title={"MIN"} changeValue={props.changeMinValue} value={props.minValue} />
        </div>
    )
}