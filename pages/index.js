import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Layout from "../components/Layout";
 
import { getStoryblokApi , StoryblokComponent,  useStoryblokState,} from "@storyblok/react"
 
export default function Home({ story }) {
  story = useStoryblokState(story);
 
  return (
    <div className={styles.container}>
        <Head>
          <title>Davide Santonocito</title>
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

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

