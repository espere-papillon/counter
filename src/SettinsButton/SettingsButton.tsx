import React from 'react';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

type propsSettingsButtonType = {
    saveLocalStorageHandler: () => void
    labelDisabled: boolean
    hide: boolean
}

export function SettingsButton(props: propsSettingsButtonType) {
    return (
        <>
            <Button style={{margin: "10px"}} variant={"contained"} color={"primary"} disabled={props.labelDisabled}
                    onClick={props.saveLocalStorageHandler}>Save</Button>
            {props.hide ?
                <NavLink style={{textDecoration: "none"}} to="/variant2">
                    <Button style={{margin: "20px"}} variant="contained" color="primary">
                        Return
                    </Button>
                </NavLink> :
                <></>
            }
        </>
    )
}