import styles from "./Navbar.module.scss"
import  {useState, useEffect} from "react"
import { useRouter } from 'next/router';
import LedPanel from "../LedPanel/LedPanel"
import BackButton from "../BackButton/BackButton";
import scrollToSection from "../../assets/js/scrollToSection";


const Navbar = () =>
{

  // router definition
  const router = useRouter();
  const { pathname } = router;

  //Toggle menu
  const [menuVisibility, setMenuVisibility] = useState(false)

  function toggleMenu(){
    setMenuVisibility(!menuVisibility)
  }


  function moveToSection(elId) {
    
    if (pathname === '/') {

      scrollFromMenu(elId);
  
    } else {
      
      router.push(`/#${elId}`);
  
      }


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
            <li onClick={() => moveToSection('home')}>Home</li>
            <li onClick={() => moveToSection('about')}>About Me</li>
            <li onClick={() => moveToSection('projects')}>My Projects</li>
            <li><a href="./blog">Blog</a></li>
            <li onClick={() => scrollFromMenu('contact')}>Contact Me</li>
        </ul>
    </div>
  </nav>}
  </>
);}
 
export default Navbar;