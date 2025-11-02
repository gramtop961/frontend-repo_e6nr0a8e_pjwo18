import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalGradient from './components/GlobalGradient';

import Home from './pages/Home';
import About from './pages/About';
import Franchise from './pages/Franchise';
import EPS from './pages/partners/EPS';
import India1 from './pages/partners/India1';
import Findi from './pages/partners/Findi';
import Hitachi from './pages/partners/Hitachi';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalGradient />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white text-slate-900">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/partners/eps" element={<EPS />} />
            <Route path="/partners/india1" element={<India1 />} />
            <Route path="/partners/findi" element={<Findi />} />
            <Route path="/partners/hitachi" element={<Hitachi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
