import styles from './Footer.module.scss';

const Footer = () => {
  
    return ( 
          <footer className={styles["footer-container"]}>
            <div className={styles["neon-window"]}>
                <h2>How to reach me</h2>
                <p>Don't hesitate to contact me for every idea you might have in mind!</p>
                <p>You can find me on my LinkedIn here below</p>
                <div>
                    IMAGE HERE
                </div>
                <p>...and here below is my Github profile.</p>
                <div>
                    IMAGE HERE
                </div>
                <p>See you soon! 😃</p>
            </div>
          </footer>
          );
  };
   
  export default Footer;