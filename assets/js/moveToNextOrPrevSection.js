import siteSections from "../data/siteSections";

export default function moveToNextOrPrevSection(direction, state, dispatch) {

    // Handle the event based on the direction of the movement
      if (direction === 'down') {
      // Handle downward movement

      if ((state.currentSectionIndex + 1) < siteSections.length ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: 1 });
      }



      } else if (direction === 'up') {
      // Handle upward movement

      if (state.currentSectionIndex > 0 ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: -1 });
      }

      }

  }