import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { RealTimeClock } from '@/components/RealTimeClock';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <RealTimeClock />
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
