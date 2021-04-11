import React from 'react';

type propsSettingsButtonType = {
    saveLocalStorageHandler: () => void
    labelDisabled: boolean
}

export function SettingsButton (props: propsSettingsButtonType) {
    return (
        <button disabled={props.labelDisabled} onClick={props.saveLocalStorageHandler}>Save</button>
    )
}