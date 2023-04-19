import styles from './Led.module.scss';
import classNames from 'classnames';

function Led({state}) {
    const ledClasses = classNames(styles["led"], {[styles["on"]]: state});

    return ( 
        
        <span className={styles["led-bg"]}>
            <div className={ledClasses}>
            </div>
        </span>

        )
}
   
  export default Led;
