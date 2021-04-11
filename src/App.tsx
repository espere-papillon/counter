import React, {useState} from 'react';
import './App.css';
import {ScoreBoard} from './ScoreBoard/ScoreBoard';
import {ClickButtons} from "./ClickButtons/ClickButtons";
import Settings from "./Settings";

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

    return (
        <div>
            <Settings setCount={setCount}/>
            <div className="App">
                <div>
                    <ScoreBoard counter={count}/>
                </div>
                <div>
                    <ClickButtons count={count} increaseNumber={increaseNumber} resetCount={resetCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;
