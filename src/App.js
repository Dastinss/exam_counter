import './App.css';
import s from './Button.modul.css'
import {Buttons} from "./components/Buttons";
import React, {useState} from "react";


function App() {
    const [count,setCount] = useState(0)

    const minCount = 0;
    const maxCount = 5;

    const inc = () => {
        if (count < maxCount) {
            setCount(count+1);
        }}

    const reset = () => {
    setCount(minCount)
    }

    return (
        // <div>
        //     <span>{count}</span>
        //     <div>
        //         <button onClick={inc}>inc</button>
        //         <button onClick={reset}>reset</button>
        //     </div>
        // </div>

        <Buttons
            count = {count}
            minCount = {minCount}
            maxCount = {maxCount}
            inc = {inc}
            reset={reset}
        />
    );
}

export default App;
