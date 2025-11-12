import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { RealTimeClock } from '@/components/RealTimeClock';

const Work = () => {
  return (
    <div className="min-h-screen">
      <RealTimeClock />
      <Navbar />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
