import './App.css';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MobileFooter from './components/MobileFooter';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Divider from './components/Divider';
import Nosotros from './components/Nosotros';
import Agradecimientos from './components/Agradecimientos';
import DesktopFooter from './components/DesktopFooter';

function App() {
  document.body.classList.add(
    'bg-[url(./assets/mobile/bg-img-mobile.png)]',
    'bg-no-repeat',
    'bg-cover',
    'bg-fixed',
  );

  const [isMobile] = useState(window.innerWidth < 480);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <HelmetProvider>
        <header className=" header-container h-12 bg-secondary flex justify-between px-3 w-full fixed z-10 top-0 shadow-sm shadow-neutral/10">
          <Header scrollTop={scrollTop} isMobile={isMobile} />
        </header>
        <main className="">
          <Hero isMobile={isMobile} />
          <Divider quote='"Calidad y servicio profesional desde 1961"' />
          <Servicios isMobile={isMobile} />
          <Divider quote="'Por más de seis décadas somos poseedores de esta inigualable herencia, alimentada con nuestros propios sueños y el esfuerzo de quienes continúan'" />
          <Nosotros isMobile={isMobile} />
          <Agradecimientos />
        </main>
        <footer id="contacto" className="px-3 pb-3 bg-neutral">
          {isMobile ? (
            <MobileFooter scrollTop={scrollTop} />
          ) : (
            <DesktopFooter scrollTop={scrollTop} />
          )}
        </footer>
      </HelmetProvider>
    </>
  );
}

export default App;
