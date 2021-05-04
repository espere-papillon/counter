import React from "react";
import {Button} from "@material-ui/core";

type propsClickButtonType = {
    title: string
    labelDisable: boolean
    typeFunction?: () => void
}

export const ClickButton = (props: propsClickButtonType) => {
    return (
        <Button style={{margin: "10px", display: "flex", justifyContent: "space-around"}} variant={"contained"}
                color={"primary"} disabled={props.labelDisable} onClick={props.typeFunction}>{props.title}</Button>
    )
}