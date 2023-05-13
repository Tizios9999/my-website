import styles from "./Navbar.module.scss"
import  { useState, useEffect, useContext } from "react"
import { SiteContext } from "../../contexts/SiteContext";
import { useRouter } from 'next/router';
import Link from 'next/link';
import LedPanel from "../LedPanel/LedPanel"
import BackButton from "../BackButton/BackButton";
import SectionArrow from "../SectionArrow/SectionArrow";
import siteSections from "../../assets/data/siteSections";
import scrollToSection from "../../assets/js/scrollToSection";


const Navbar = () =>
{

  // router definition
  const router = useRouter();
  const { pathname } = router;

  const [ state, dispatch ] = useContext(SiteContext);

  //Toggle menu
  const [menuVisibility, setMenuVisibility] = useState(false)

  function toggleMenu(){
    setMenuVisibility(!menuVisibility)
  }


  function changeSection(id) {
    
    if (pathname === '/') {

      dispatch({ type: "CHANGE_CURRENT_SECTION", payload: id})
  
    } else {
      
      router.push(`/#${siteSections[id]}`);
      dispatch({ type: "CHANGE_CURRENT_SECTION", payload: id})
  
      }

    
      dispatch({ type: "TOGGLE_HAMBURGER_STATUS"})

  }

  useEffect(() => {
    if (menuVisibility) {

      document.body.style.overflow = "hidden";

    } else {

        if (pathname !== '/') {

          document.body.style.overflow = "auto";
        }
    }
  }, [menuVisibility])

  return (
  <>
  <nav className={styles["nav-top"]}>
    <BackButton />
    <div className={styles["screen-over-nav"]}>
    {pathname === '/' && <SectionArrow direction="up" />}
      <h1 className={styles["my-name"]}>Davide Santonocito</h1>
    {pathname === '/' && <SectionArrow direction="down" />}
    </div>
  </nav>
  <LedPanel onclick={toggleMenu} />
  {menuVisibility && <nav className={styles["navbar"]}>
     <div className={styles["nav-menu"]}>
        <ul onClick={() => toggleMenu()}>
            <li onClick={() => changeSection(0)}>Home</li>
            <li onClick={() => changeSection(1)}>About Me</li>
            <li onClick={() => changeSection(2)}>My Projects</li>
            <li onClick={() => dispatch({ type: "TOGGLE_HAMBURGER_STATUS"})}>
              <Link href="/blog" passHref>
                <a>Blog</a>
              </Link>
            </li>
            <li onClick={() => {scrollToSection('contact'), dispatch({ type: "TOGGLE_HAMBURGER_STATUS"}), dispatch({ type: "CHANGE_CURRENT_SECTION", payload: siteSections.length - 1})}}>Contact Me</li>
        </ul>
    </div>
  </nav>}
  </>
);}
 
export default Navbar;