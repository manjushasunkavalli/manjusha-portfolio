import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PacmanAI from './components/PacmanAI';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Research from './components/Research';
import EBooks from './components/EBooks';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <PacmanAI />
      <Projects />
      <Skills />
      <Experience />
      <Gallery />
      <Research />
      <EBooks />
      <Contact />
    </div>
  );
}

export default App;