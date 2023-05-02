import styles from './Footer.module.scss';

const Footer = () => {
  
    return ( 
          <footer className={styles["footer-container"]}>
            <div className={styles["neon-window"]} id="contact">
                <h2>How to reach me</h2>
                <p>Don't hesitate to contact me for any idea you might have in mind!</p>
                <p>You can find me on my LinkedIn here below</p>
                <a href="https://www.linkedin.com/in/davide-santonocito-36ab84170/" target="_blank">
                <img className={styles["icon"]} src="/linkedin-icon.svg" alt="Linkedin Icon"></img>
                </a>
                <p>...and here below is my Github profile.</p>
                <a href="https://github.com/Tizios9999" target="_blank">
                <img className={styles["icon"]} src="/github-icon.svg" alt="Github Link"></img>
                </a>
                <p>See you soon! 😃</p>
            </div>
          </footer>
          );
  };
   
  export default Footer;