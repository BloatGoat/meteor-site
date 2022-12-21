import { Feature } from '@/types/Feature';
import { News } from '@/types/News';
import Head from 'next/head';
import HeroSection from '@/sections/home/Hero';
import FeaturesSection from '@/sections/home/Features';
import NewsSection from '@/sections/home/News';
import { VISIBLE_NEWS_POSTS } from '@/constants';
import { createRef, Ref } from 'react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';

export default function Home({
  features,
  news,
}: {
  features: Feature[];
  news: News[];
}) {
  const heroRef: Ref<HTMLElement> = createRef();
  const featuresSectionRef: Ref<HTMLElement> = createRef();
  const newsSectionRef: Ref<HTMLElement> = createRef();

  return (
    <>
      <Head>
        <meta
          name="title"
          content="Meteor - Open source Old School Runescape client"
        />
        <meta
          name="description"
          content="Unleash your full potential in Oldschool Runescape with Meteor, the open source client featuring overpowered plugins. Customize and modify to suit your needs. Try it now and dominate the game."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Meteor - Open source Old School Runescape client"
        />
        <meta property="og:url" content="https://www.meteor-client.com/" />
        <meta
          property="og:description"
          content="Meteor, the open-source client featuring overpowered plugins. "
        />
      </Head>
      <Navigation sectionRefs={[heroRef, featuresSectionRef, newsSectionRef]} />
      <HeroSection ref={heroRef} />
      <FeaturesSection features={features} ref={featuresSectionRef} />
      <NewsSection news={news} ref={newsSectionRef} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const features = await fetch(`${process.env.HOST}/api/features`).then((res) =>
    res.json(),
  );
  const news = await fetch(`${process.env.HOST}/api/news`).then((res) =>
    res.json(),
  );
  return {
    props: { features, news: news.slice(0, VISIBLE_NEWS_POSTS) },
  };
}
