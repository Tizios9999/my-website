import styles from "./SectionArrow.module.scss";
import {useEffect, useRef} from "react";
import classNames from 'classnames';


const SectionArrow = ({direction}) => {

    const arrow = useRef();
    const arrowClasses = classNames(styles["section-arrow-image"], {[styles["down"]]: direction == "down"})

    return (
            <div ref={arrow}>
              <img src="arrow-up.svg" className={arrowClasses} />
            </div>
    )
}

export default SectionArrow;