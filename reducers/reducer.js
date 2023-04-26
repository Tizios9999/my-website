export function reducer(state, action) {

   const siteSectionsArray = [ 'home', 'about', 'projects', 'contact' ];

    switch (action.type) {

     case "CHANGE_SECTION":
       return {
        ...state,
        siteSection: action.payload
        };

     default: {
        throw Error('Unknown action: ' + action.type);
     }
    } 
   }