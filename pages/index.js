import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import { getStoryblokApi , StoryblokComponent,  useStoryblokState,} from "@storyblok/react"
 
export default function Home(props) {
  const story = props.story
 
  return (
    <div className={styles.container}>
        <Head>
          <title>Davide Santonocito</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
   
        <header>
          <h1>
            {/* { story ? story.name : 'My Site' } */}
            Sito Davide
          </h1>
        </header>
   
         <StoryblokComponent blok={story.content} />
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

