import Led from './Led';
import React, { useState, useContext, useEffect } from 'react';
import { SiteContext } from "../../contexts/SiteContext";
import styles from './LedPanel.module.scss';
import generatePanelStream from '../../assets/js/generatePanelStream';
import hamburgerPanel from '../../assets/data/panels/hamburgerPanel';
import crossPanel from '../../assets/data/panels/crossPanel';
import crossHamburgerPanel from '../../assets/data/panels/crossHamburgerPanel';

function LedPanel(props) {

    const [ledStates, setLedStates] = useState(generatePanelStream(hamburgerPanel));

    const [state, dispatch] = useContext(SiteContext);

    useEffect(() => {

        if (state.hamburgerStatus) {

            setLedStates(generatePanelStream(hamburgerPanel));
        
        } else {

            setLedStates(generatePanelStream(crossPanel));
        }

    }, [state.hamburgerStatus])

    const ledTransition = (panel, interval = 100) => {

        setTimeout(() => {
            dispatch({type: "TOGGLE_HAMBURGER_STATUS"});
        }, interval)

    }

    const handleLedClick = () => {

        setLedStates(generatePanelStream(crossHamburgerPanel));

        ledTransition();

    }

    return ( 
        <div onClick={() => {
            props.onclick();
            handleLedClick();
        }} className={styles["panel-container"]}>
            <div className={styles["led-grid"]}>{ledStates.map((ledState, index) => (
        <Led key={index} state={ledState}/>
      ))}</div>
        </div>
        )
}
   
  export default LedPanel;
