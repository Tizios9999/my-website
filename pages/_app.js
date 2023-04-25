import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { SiteContextProvider } from '../contexts/SiteContext';
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Article from "../components/Article/Article";
import Teaser from "../components/Teaser";
import Banner from "../components/Banner/Banner";
import Section from "../components/Section";
import About from "../components/About/About";
import Slider from "../components/Slider/Slider";
import AllArticles from "../components/AllArticles/AllArticles";
import ArticleTeaser from "../components/ArticleTeaser/ArticleTeaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  slider: Slider,
  page: Page,
  article:Article,
  banner: Banner,
  section: Section,
  about: About,
  allArticles : AllArticles,
  articleTeaser: ArticleTeaser,
};
 

function MyApp({ Component, pageProps }) {
  return (
    <SiteContextProvider> 
      <Component {...pageProps} />
    </SiteContextProvider>
  )
}

storyblokInit({
  accessToken: "b6VRO9OKyxeZ0JLGdCQU0wtt",
  use: [apiPlugin],
  components,
});

export default MyApp
