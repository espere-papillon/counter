import React from "react";

type propsClickButtonType = {
    title: string
    labelDisable: boolean
    typeFunction: () => void
}

export const ClickButton = (props: propsClickButtonType) => {
    return (
        <button disabled={props.labelDisable} onClick={props.typeFunction}>{props.title}</button>
    )
}