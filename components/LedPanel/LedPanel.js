import Led from './Led';
import React, { useState } from 'react';
import styles from './LedPanel.module.scss';
import generatePanelStream from '../../assets/js/generatePanelStream';

function LedPanel(props) {

    const ledLights = [5, 5, 5, 5, 5];
    const ledLights2 = [1,    3,    1, 
                        1, 1, 1, 1, 3,
                                 1, 3,
                           1, 1, 1, 1,
                        1,    3,    1];

    const firstLed = generatePanelStream(ledLights);
    const secondLed = generatePanelStream(ledLights2);

    const [ledStates, setLedStates] = useState(firstLed);

    const handleLedClick = (index) => {

        if (ledStates.toString() == firstLed.toString() ) {

            setLedStates(secondLed);
        
        } else {

            setLedStates(firstLed);
        }

    }

    return ( 
        <div onClick={() => {
            props.onclick();
            handleLedClick();
        }} className={styles["panel-container"]}>
            <div className={styles["led-grid"]}>{ledStates.map((state, index) => (
        <Led key={index} state={state}/>
      ))}</div>
        </div>
        )
}
   
  export default LedPanel;
