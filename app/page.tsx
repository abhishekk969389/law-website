import Banner from './components/homelayout/banner';
import Card from './components/homelayout/card';
import About from './components/homelayout/about';
import Services from './components/homelayout/services';
import Counting from './components/ui/counting';
import CaseStudy from './components/homelayout/casestudy';
import Testimonials from './components/homelayout/testinomials';
import Blog from './components/homelayout/blog';
import Faq from './components/homelayout/faq';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      <Banner />
      <Card />
      <About />
      <Services />
      <Counting />
      <CaseStudy />
      <Testimonials />
      <Blog />
      <Faq />
    </main>
  );
}