import Head from 'next/head';
import Aboutme from '../components/Aboutme';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MobileHeader from '../components/mobile/MobileHeader';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import BusImg from './../components/BusImg';
import Contact from './../components/Contact';

import client from '../helpers/sanityClient';

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "projects"]`);
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default function Home({ projects }) {
  return (
    <div className="bg-blue-dark h-full  m-auto overflow-x-hidden overflow-y-hidden">
      <Head>
        <title>Diego Taveras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:flex">
        <Header className="lg:w-[20%]" />
        <div className="lg:w-[70%] lg:ml-[20%]">
          <MobileHeader />
          <Banner />
          <BusImg />
          <Aboutme />
          <Skills />
          <Portfolio projects={projects} />
          <Contact />
        </div>
      </div>
    </div>
  );
}
