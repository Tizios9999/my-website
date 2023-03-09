import Led from './Led';
import styles from './LedPanel.module.scss';

function LedPanel(props) {

    const ledLights = [5, 5, 5, 5, 5];

    const ledLights2 = [1,    3,    1, 
                        1, 1, 1, 1, 3,
                                 1, 3,
                           1, 1, 1, 1,
                        1,    3,    1];

    function generatePanelStream(panelMap) {
        let ledArray = [];
        let switchedOn = true;

        panelMap.forEach(element => {
            
            for (let i = 0; i < element; i++) {
                ledArray.push(switchedOn);
            }
            switchedOn = !switchedOn;

        })

        return ledArray;
    }
    
    const panelArray = generatePanelStream(ledLights).map((card) => {

      return (
            <Led highlighted={card}/>
            )  
    })

    return ( 
        <div onClick={props.onclick} className={styles["panel-container"]}>
            <div className={styles["led-grid"]}>{panelArray}</div>
        </div>
        )
}
   
  export default LedPanel;
