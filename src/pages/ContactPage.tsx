import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { RealTimeClock } from '@/components/RealTimeClock';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <RealTimeClock />
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
