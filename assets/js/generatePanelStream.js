export default function generatePanelStream(panelMap) {

    // const ledLightsHamburger =  [5, 5, 5, 5, 5];

    // const ledLightsTransition = [1,    3,    1,
    //                              1,    3,    2,
    //                                    3,    2,
    //                                    3,    1,
    //                              1,    3,    1];

    // const ledLightsCross =      [1,    3,    1, 
    //                              1, 1, 1, 1, 3,
    //                              1, 3,
    //                                 1, 1, 1, 1,
    //                              1,    3,    1];

    // const fromHamburgerToCrossAnimation = [ledLightsHamburger, ledLightsTransition, ledLightsCross];



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