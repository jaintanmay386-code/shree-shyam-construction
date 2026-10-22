import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Services } from './components/Services.tsx';
import { ConstructionProcess } from './components/ConstructionProcess.tsx';
import { ProjectsGallery } from './components/ProjectsGallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { PlotEstimator } from './components/PlotEstimator.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { ConsultationForm } from './components/ConsultationForm.tsx';
import { LocationMap } from './components/LocationMap.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForConsultation(serviceTitle);
  };

  const handleOpenConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1E8] font-sans flex flex-col selection:bg-[#D4AF37] selection:text-[#0B0B0B]">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenConsultationModal={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Us Section */}
        <AboutUs />

        {/* Our Construction Services */}
        <Services onSelectService={handleSelectService} />

        {/* 6-Step Construction Roadmap */}
        <ConstructionProcess />

        {/* Projects / Work Gallery (with clear honest disclosure) */}
        <ProjectsGallery />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive Plot Construction Cost Estimator */}
        <PlotEstimator />

        {/* Testimonials & Benchmark Standards */}
        <Testimonials />

        {/* Frequently Asked Questions Section */}
        <FAQ />

        {/* Free Consultation & Dedicated Site Visit Request Form */}
        <ConsultationForm initialService={selectedServiceForConsultation} />

        {/* Office Location & Locality Map */}
        <LocationMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Quick Call Actions */}
      <FloatingWhatsApp />
    </div>
  );
}
