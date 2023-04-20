import styles from "./Navbar.module.scss"
import  {useState, useEffect} from "react"
import LedPanel from "../LedPanel/LedPanel"
import BackButton from "../BackButton/BackButton";


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
            <li>Home</li>
            <li>About Me</li>
            <li>My Projects</li>
            <li><a href="./blog">Blog</a></li>
            <li>Contact Me</li>
        </ul>
    </div>
  </nav>}
  </>
);}
 
export default Navbar;