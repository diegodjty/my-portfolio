import Head from 'next/head'
import Aboutme from '../components/Aboutme';
import Banner from '../components/Banner'
import MobileHeader from '../components/mobile/MobileHeader'
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import BusImg from './../components/BusImg';
import Contact from './../components/Contact';

export default function Home() {
  return (
    <div className="bg-blue-dark h-full max-w-7xl m-auto">
      <Head>
        <title>Diego Taveras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileHeader />
      <Banner />
      <BusImg />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Contact />
    </div>

  )
}
