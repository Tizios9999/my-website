import styles from "./Navbar.module.scss"
import  {useState, useEffect} from "react"
import LedPanel from "../LedPanel/LedPanel"

const Navbar = () =>
{
  //Toggle menu
  const [menuVisibility, setMenuVisibility] = useState(false)

  function toggleMenu(){
    setMenuVisibility(!menuVisibility)
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
  <nav className={styles["nav-top"]}></nav>
  <LedPanel onclick={toggleMenu} />
  {menuVisibility && <nav className={styles["navbar"]}>
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
  </nav>}
  </>
);}
 
export default Navbar;