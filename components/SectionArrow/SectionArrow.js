import styles from "./SectionArrow.module.scss";
import Image from "next/image";
import {useEffect, useRef, useContext} from "react";
import { SiteContext } from "../../contexts/SiteContext";
import classNames from 'classnames';
import moveToNextOrPrevSection from "../../assets/js/moveToNextOrPrevSection";
import siteSections from "../../assets/data/siteSections";

const SectionArrow = ({direction}) => {

    const [state, dispatch] = useContext(SiteContext);

    const arrow = useRef();
    const arrowClasses = classNames(styles["section-arrow-image"], 
                                  {[styles["down-direction"]]: direction == "down"},
                                  {[styles["inactive"]]: direction == "up" && state.currentSectionIndex == 0},
                                  {[styles["inactive"]]: direction == "down" && state.currentSectionIndex+2 > siteSections.length},
                                  {[styles["active"]]: direction == "up" && state.currentSectionIndex > 0},
                                  {[styles["active"]]: direction == "down" && state.currentSectionIndex+2 <= siteSections.length},
                                  )

    return (
            <div ref={arrow}>
              <img src="arrow-up.svg" alt=" "  className={arrowClasses} onClick={() => moveToNextOrPrevSection(direction, state, dispatch)}/>
            </div>
    )
}

export default SectionArrow;