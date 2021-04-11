import React, {ChangeEvent} from 'react';

type propsInputSettingType = {
    value: number
    title: string
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputSetting(props: propsInputSettingType) {
    return (
        <div className="settingForm">
            <span className="settingLabel">{props.title}</span>
            <input className="settingInput" type={"number"} step={1} onChange={props.changeValue} value={props.value} />
        </div>
    )
}