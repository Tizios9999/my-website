import styles from "./Navbar.module.scss"
import  {useState} from "react"
import LedPanel from "../LedPanel/LedPanel"

const Navbar = () =>
{
  //Toggle menu
  const [menuVisibility, setMenuVisibility] = useState(false)

  function toggleMenu(){
    setMenuVisibility(!menuVisibility)
  }
  return (
  <>
  <LedPanel onclick={toggleMenu} />
  <nav className={styles["navbar"]}>
    {menuVisibility && <div className={styles["nav-menu"]}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Curriculum</li>
            <li>Contact Me</li>
        </ul>
    </div>}
  </nav>
  </>
);}
 
export default Navbar;