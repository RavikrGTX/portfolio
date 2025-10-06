'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mywork from "./components/Mywork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <>

    <Navbar/> 
    <Header/>
    <About/>
    <Mywork/>
    {/* <Testimonials/> */}
    <Skills/>
    <Contact/>
    <Footer/>
    
    </>
  );
}
