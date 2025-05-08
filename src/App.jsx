import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: containerRef
  })
  
  // State to track active section
  const [activeSection, setActiveSection] = useState(0)

  // Create refs for each section
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
  const sectionRefs = [heroRef, aboutRef, skillsRef, projectsRef, contactRef]

  // Function to scroll to a specific section
  const scrollToSection = (ref, index) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(index)
  }
  
  // Function to check which section is in view
  const checkActiveSection = () => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const scrollPosition = container.scrollTop
    const windowHeight = container.clientHeight
    
    // Find which section is currently most visible
    let maxVisibleSection = 0
    let maxVisibleArea = 0
    
    sectionRefs.forEach((ref, index) => {
      if (!ref.current) return
      
      const element = ref.current
      const rect = element.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(rect.top, containerRect.top)
      const visibleBottom = Math.min(rect.bottom, containerRect.bottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      
      if (visibleHeight > maxVisibleArea) {
        maxVisibleArea = visibleHeight
        maxVisibleSection = index
      }
    })
    
    setActiveSection(maxVisibleSection)
  }
  
  // Add scroll event listener
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    container.addEventListener('scroll', checkActiveSection)
    return () => {
      container.removeEventListener('scroll', checkActiveSection)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="bg-gradient-to-b from-gray-900 to-black h-screen overflow-y-scroll snap-y snap-none sm:snap-mandatory text-white scrollbar-hide"
      style={{ scrollBehavior: 'smooth' }}
    >
      <motion.div 
        ref={heroRef}
        className="h-screen snap-start snap-always flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      <motion.div 
        ref={aboutRef}
        className="h-screen snap-start snap-always flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div 
        ref={skillsRef}
        className="h-screen snap-start snap-always flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div 
        ref={projectsRef}
        className="h-screen snap-start snap-always flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div 
        ref={contactRef}
        className="h-screen snap-start snap-always flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {sectionRefs.map((ref, index) => (
          <button 
            key={index}
            onClick={() => scrollToSection(ref, index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === index ? 'bg-blue-500 scale-125' : 'bg-white opacity-50 hover:opacity-100'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App

