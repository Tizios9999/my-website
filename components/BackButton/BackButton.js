import { useRouter } from 'next/router';
import styles from './BackButton.module.scss';

const BackButton = () => 
{
  const router = useRouter();

  const { pathname, back } = router;


// function to go back
  function handleGoBack() {
    back();
  }

  if (pathname === '/') {

    return <></>

  } else {
    
    return <div className={styles["back-button"]} onClick={handleGoBack}>
            <img src="./back-arrow.svg" alt="<--"/>
           </div>

    }
  } 

  export default BackButton;