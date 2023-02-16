import styles from './Led.module.scss';
import classNames from 'classnames';

function Led(props) {
    const ledClasses = classNames(styles["led"], {[styles["on"]]: props.highlighted});

    return ( 
        
        <span className={styles["led-bg"]}>
            <div className={ledClasses}>
            </div>
        </span>

        )
}
   
  export default Led;
