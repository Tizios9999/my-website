import styles from "./Navbar.module.scss"
import  {useState, useEffect} from "react"
import LedPanel from "../LedPanel/LedPanel"
import BackButton from "../BackButton/BackButton";
import scrollToSection from "../../assets/js/scrollToSection";


const Navbar = () =>
{
  //Toggle menu
  const [menuVisibility, setMenuVisibility] = useState(false)

  function toggleMenu(){
    setMenuVisibility(!menuVisibility)
  }

  function scrollFromMenu(elId) {
    toggleMenu();
    scrollToSection(elId);
  }

  useEffect(() => {
    if (menuVisibility) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuVisibility])

  return (
  <>
  <nav className={styles["nav-top"]}>
    <BackButton />
    <div className={styles["screen-over-nav"]}>
      <h1 className={styles["my-name"]}>Davide Santonocito</h1>
    </div>
  </nav>
  <LedPanel onclick={toggleMenu} />
  {menuVisibility && <nav className={styles["navbar"]}>
     <div className={styles["nav-menu"]}>
        <ul>
            <li onClick={() => scrollFromMenu('home')}>Home</li>
            <li onClick={() => scrollFromMenu('about')}>About Me</li>
            <li onClick={() => scrollFromMenu('projects')}>My Projects</li>
            <li><a href="./blog">Blog</a></li>
            <li onClick={() => scrollFromMenu('contact')}>Contact Me</li>
        </ul>
    </div>
  </nav>}
  </>
);}
 
export default Navbar;