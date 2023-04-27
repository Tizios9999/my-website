import Head from "next/head"
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const { pathname } = router;

  const [state, dispatch] = useContext(SiteContext);

  useEffect(() => {

    console.log("sitesect", siteSections[state.currentSectionIndex])
    scrollToSection(siteSections[state.currentSectionIndex]);

  }, [] ) 

  useEffect(() => {

    const handleScroll = debounce((event) => {
      let deltaY = 0;
      if (event.type === 'touchmove') {
      const touch = event.touches[0];
      deltaY = touch.pageY - state.prevTouchY;

      dispatch({ type: "UPDATE_PREV_TOUCH_Y", payload: touch.pageY})

    } else if (event.type === 'wheel') {
      deltaY = event.deltaY;
    }

    // Determine the direction of the movement
    let direction = deltaY > 0 ? 'down' : 'up';

    // Handle the event based on the direction of the movement
    if (direction === 'down') {
      // Handle downward movement

      console.log("down");

      if ((state.currentSectionIndex + 1) < siteSections.length ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: 1 });
      }



    } else if (direction === 'up') {
      // Handle upward movement

      console.log("up");

      if (state.currentSectionIndex > 0 ) {
        dispatch({ type: "UPDATE_CURRENT_SECTION", payload: -1 });
      }

    }

    }, 200)

    scrollToSection(siteSections[state.currentSectionIndex]);

    window.addEventListener('touchmove', handleScroll);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleScroll);
    
    // return a cleanup function to remove the event listeners
    return () => {
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
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

