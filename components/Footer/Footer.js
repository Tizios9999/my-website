import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["neon-window"]} id="contact">
        <h2>How to reach me</h2>
        <p>
          Don&apos;t hesitate to contact me for any idea you might have in mind!
        </p>
        <p>You can find me on my LinkedIn here below</p>
        <Link
          href="https://www.linkedin.com/in/davide-santonocito-36ab84170/"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <img
              className={styles["icon"]}
              src="/linkedin-icon.svg"
              alt="Linkedin Icon"
            />
          </a>
        </Link>
        <p>...and here below is my Github profile.</p>
        <Link href="https://github.com/Tizios9999" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <img
              className={styles["icon"]}
              src="/github-icon.svg"
              alt="Github Link"
            />
          </a>
        </Link>
        <p>See you soon! 😃</p>
      </div>
    </footer>
  );
};

export default Footer;
