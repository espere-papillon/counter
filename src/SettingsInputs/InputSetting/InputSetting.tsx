import React, {ChangeEvent} from 'react';
import {Container, TextField} from "@material-ui/core";

type propsInputSettingType = {
    value: number
    title: string
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputSetting(props: propsInputSettingType) {
    return (
        < >
            <Container style={{fontSize: "20px", fontFamily: "sans-serif", textAlign: "center", padding: "10px 0 0"}}>{props.title}</Container>
            <TextField style={{fontSize: "20px", fontFamily: "sans-serif", textAlign: "center", margin: "10px", width: "90%"}} variant={"outlined"} type={"number"} onChange={props.changeValue} value={props.value} />
        </>
    )
}