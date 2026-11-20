import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DentistSection } from './components/DentistSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F6F9FA] text-[#0F2733] overflow-x-clip">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#0B7497] focus:px-4 focus:py-2 focus:text-sm focus:text-[#FFFFFF]"
        >
          Skip to content
        </a>

        <Header />

        <main id="main-content">
          <Hero />
          <AboutSection />
          <TreatmentsSection />
          <DentistSection />
          <ExperienceSection />
          <AppointmentSection />
        </main>

        <LocationFooter />
      </div>
    </MotionConfig>
  );
}

export default App;
