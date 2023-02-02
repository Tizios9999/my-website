import styles from "./Navbar.module.scss"
 
const Navbar = () => (
  <nav className={styles["navbar"]}>
    <div>X</div>
    <div className={styles["nav-menu"]}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Curriculum</li>
            <li>Contact Me</li>
        </ul>
    </div>
  </nav>
);
 
export default Navbar;