'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative text-gray-900">
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Code background wrapper - starts after header */}
        <div className="relative">
          {/* Blurred code lines background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-100">
            <pre className="text-sm md:text-base text-gray-500 leading-loose font-mono p-8 select-none">
{`  function createWebsite() {
    const design = 'modern & responsive';
    const tech = ['React', 'Next.js', 'Tailwind'];
    
    return {
      performance: 'optimized',
      ux: 'exceptional',
      seo: 'enhanced'
    };
  }
  
  class BlackBoxAgency {
    constructor() {
      this.services = ['Web Development', 'Mobile Apps', 'UI/UX Design'];
      this.quality = 'premium';
    }
    
    buildProject(requirements) {
      const solution = this.analyze(requirements);
      const design = this.createDesign(solution);
      const code = this.develop(design);
      
      return this.deploy(code);
    }
  }
  
  const portfolio = [
    { name: 'E-commerce Platform', tech: 'React + Node' },
    { name: 'Booking System', tech: 'Next.js + MongoDB' },
    { name: 'Mobile App', tech: 'React Native' }
  ];
  
  async function deliverProject() {
    const quality = await testAndOptimize();
    const result = await deploy(quality);
    
    return result.success ? '🚀' : 'iterate';
  }
  
  // Continuous innovation
  while (true) {
    learnNewTechnology();
    improveSkills();
    buildAmazingProjects();
  }`}
            </pre>
          </div>
          
          {/* Actual content */}
          <div className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}

