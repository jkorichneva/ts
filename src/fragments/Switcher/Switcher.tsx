import React from 'react';
import './Switcher.css'
import SwitcherInterface from "./SwitcherInterface";

function Switcher(props: SwitcherInterface): JSX.Element {
    return (
        <div className="switcher">
            <label className="switcher_switch">
                <input type="checkbox" checked={props.isDark} onChange={props.onThemeChange}/>
                <span className="switcher_slider" />
            </label>
            Dark Mode
        </div>
    )
}

export default Switcher;
