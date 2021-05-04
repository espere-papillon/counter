import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Variant1} from "./Variant1";
import {Variant2} from './Variant2';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {SettingsVariant2} from "./SettingsVariant2";

function App() {

    const updateInfoFromLocalStorage = (valueKey: string): number => {
        let valueMaxAsString = localStorage.getItem(valueKey)
        let localStorageValue = 0
        if (valueMaxAsString) {
            localStorageValue = JSON.parse(valueMaxAsString)
        }
        return localStorageValue
    }

    

    const [count, setCount] = useState<number>(updateInfoFromLocalStorage("minValue"))

    function resetCount() {
        setCount(updateInfoFromLocalStorage("minValue"))
    }

    function increaseNumber() {
        let newCount = count
        newCount >= updateInfoFromLocalStorage("maxValue") ? newCount = updateInfoFromLocalStorage("minValue") : newCount++;
        setCount(newCount)
    }

    const [maxValue, setMaxValue] = useState<number>(updateInfoFromLocalStorage("maxValue"))
    const [minValue, setMinValue] = useState<number>(updateInfoFromLocalStorage("minValue"))

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(event.currentTarget.value))
    }

    const changeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(event.currentTarget.value))
    }

    const labelDisabled = (): boolean => {
        let localStorageMaxValue = updateInfoFromLocalStorage("maxValue")
        let localStorageMinValue = updateInfoFromLocalStorage("minValue")
        if (maxValue < 0 || minValue < 0)
            return true
        if (maxValue <= minValue)
            return true
        return maxValue === localStorageMaxValue && minValue === localStorageMinValue;

    }

    useEffect(() => {
        setMaxValue(updateInfoFromLocalStorage("maxValue"))
        setMinValue(updateInfoFromLocalStorage("minValue"))
    }, [])

    useEffect(() => {
        labelDisabled()
    }, [maxValue, minValue])

    const saveLocalStorageHandler = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setMaxValue(updateInfoFromLocalStorage("maxValue"))
        localStorage.setItem("minValue", JSON.stringify(minValue))
        setMinValue(updateInfoFromLocalStorage("minValue"))
        labelDisabled()
        setCount(minValue)
    }

    return (
        <BrowserRouter>
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        <NavLink style={{textDecoration: "none", color: "#fff"}} to="/">
                            Counter
                        </NavLink>
                    </Typography>
                    <Container fixed>
                        <Grid container >
                            <NavLink style={{textDecoration: "none"}} to="/variant1">
                                <Button style={{margin: "20px"}} variant="contained" color="primary">
                                    Version 1
                                </Button>
                            </NavLink>
                            <NavLink style={{textDecoration: "none"}} to="/variant2">
                                <Button style={{margin: "20px"}} variant="contained" color="primary">
                                    Version 2
                                </Button>
                            </NavLink>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <div>
                <Route path={"/variant1"} render={() =>
                    <Variant1 maxValue={maxValue} minValue={minValue} count={count} changeMaxValue={changeMaxValue}
                              changeMinValue={changeMinValue} saveLocalStorageHandler={saveLocalStorageHandler}
                              labelDisabled={labelDisabled()} increaseNumber={increaseNumber}
                              resetCount={resetCount}/>}/>
                <Route path={"/variant2"} render={() =>
                    <Variant2 maxValue={maxValue} minValue={minValue} count={count} changeMaxValue={changeMaxValue}
                              changeMinValue={changeMinValue} saveLocalStorageHandler={saveLocalStorageHandler}
                              labelDisabled={labelDisabled()} increaseNumber={increaseNumber}
                              resetCount={resetCount}/>}/>
                <Route path={"/settings"} render={() =>
                    <SettingsVariant2 maxValue={maxValue} minValue={minValue} count={count} changeMaxValue={changeMaxValue}
                              changeMinValue={changeMinValue} saveLocalStorageHandler={saveLocalStorageHandler}
                              labelDisabled={labelDisabled()} increaseNumber={increaseNumber}
                              resetCount={resetCount}/>}/>


                {/*<Settings maxValue={maxValue} minValue={minValue} changeMaxValue={changeMaxValue}*/}
                {/*          changeMinValue={changeMinValue} labelDisabled={labelDisabled()}*/}
                {/*          saveLocalStorageHandler={saveLocalStorageHandler}/>*/}
                {/*<div className="App">*/}
                {/*    <div>*/}
                {/*        <ScoreBoard counter={count} maxValue={maxValue}/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <ClickButtons count={count} maxValue={maxValue} minValue={minValue} increaseNumber={increaseNumber}*/}
                {/*                      resetCount={resetCount}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
