import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Gracias from './pages/Gracias';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />
      <Route path="/gracias" element={<Gracias />} />
    </Routes>
  );
}

export default App;
