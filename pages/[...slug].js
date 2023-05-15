import Head from "next/head";
import Layout from "../components/Layout";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

function capitalizeString(str) {

  return str[0].toUpperCase() + str.slice(1);
}

export default function Page({ story }) {
  story = useStoryblokState(story);
 
  return (
    <div>
      <Head>
        <title>{story ? capitalizeString(story.name) : "Davide Santonocito"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} key={story._uid} />
      </Layout>
    </div>
  );
}
 
export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams = {
    version: "draft", // or 'draft'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/" ,{
    version: 'draft'
  });
 
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
} 
