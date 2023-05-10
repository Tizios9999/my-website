import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/Layout";
import { useEffect, useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
import siteSections from "../assets/data/siteSections";
import scrollToSection from "../assets/js/scrollToSection";
import { debounce } from "lodash";
 
import { getStoryblokApi , StoryblokComponent,  useStoryblokState,} from "@storyblok/react"
 
export default function Home({ story }) {
  story = useStoryblokState(story);

  const [state, dispatch] = useContext(SiteContext);

  useEffect(() => {

    scrollToSection(siteSections[state.currentSectionIndex]);
    document.body.style.overflow = "hidden";

  }, [] ) 

  useEffect(() => {

    const handleScroll = debounce((event) => {

      let deltaY = 0;
      deltaY = event.deltaY;
    
    // Determine the direction of the movement
    let direction = deltaY > 0 ? 'down' : 'up';

    moveNextOrPrevSection(direction);

    }, 200)

  let tsY;
  let tsX;

  const handleSwipe = (event) => {
    let deltaY, deltaX = 0;

    if (event.type === 'touchstart') {
      tsY = event.touches[0].clientY;
      tsX = event.touches[0].clientX;

    }

    if (event.type === 'touchend') {
      const teY = event.changedTouches[0].clientY;
      const teX = event.changedTouches[0].clientX;

      deltaY = tsY - teY;
      deltaX = tsX - teX;

      dispatch({ type: "UPDATE_PREV_TOUCH_Y", payload: tsY.clientY})

      let direction;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      
      moveNextOrPrevSection(direction);
    

    }
  }

  const handleKeydown = (event) => {

    let direction;


      if (event.key === 'ArrowDown') {
         direction = 'down';
      }

      if (event.key === 'ArrowUp') {
        direction = 'up';
      }

    if (direction === 'up' || direction === 'down' ) {


      moveNextOrPrevSection(direction);


    }


  }

  function moveNextOrPrevSection(direction) {

    // Handle the event based on the direction of the movement
      if (direction === 'down') {
      // Handle downward movement

      if ((state.currentSectionIndex + 1) < siteSections.length ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: 1 });
      }



      } else if (direction === 'up') {
      // Handle upward movement

      if (state.currentSectionIndex > 0 ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: -1 });
      }

      }

  }

    scrollToSection(siteSections[state.currentSectionIndex]);

    window.addEventListener('touchstart', handleSwipe);
    window.addEventListener('touchend', handleSwipe);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeydown);
    
    // return a cleanup function to remove the event listeners
    return () => {
      window.removeEventListener('touchstart', handleSwipe);
      window.removeEventListener('touchend', handleSwipe);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [state.currentSectionIndex]);

  return (
    <div className={styles.container}>
        <Head>
          <title>Davide Santonocito</title>
          <link rel="icon" href="/favicon.ico" />

        </Head>
        
        <Layout>
        <StoryblokComponent blok={story.content} />
        </Layout>

      </div>
  )
}


export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

