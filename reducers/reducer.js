export function reducer(state, action) {

    switch (action.type) {

     case "CHANGE_CURRENT_SECTION":
       return {
        ...state,
        siteSection: action.payload
        };

     case "UPDATE_PREV_TOUCH_Y":
       return {
         ...state,
         prevTouchY: action.payload,
       };

       
     case "UPDATE_CURRENT_SECTION":
       return {
        ...state,
        currentSectionIndex: state.currentSectionIndex + action.payload
       };

     default: {
        throw Error('Unknown action: ' + action.type);
     }
    } 
   }