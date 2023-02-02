import '../styles/globals.scss'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Banner from "../components/Banner";
import Section from "../components/Section";
import About from "../components/About";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  banner: Banner,
  section: Section,
  about: About,
};
 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

storyblokInit({
  accessToken: "b6VRO9OKyxeZ0JLGdCQU0wtt",
  use: [apiPlugin],
  components,
});

export default MyApp
