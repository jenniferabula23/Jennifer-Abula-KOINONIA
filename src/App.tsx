import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { KoinoniaPage } from '@/pages/KoinoniaPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { SupportPage } from '@/pages/SupportPage';
import { MediaPage } from '@/pages/MediaPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="koinonia" element={<KoinoniaPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="entrepreneurship" element={<Navigate to="/support" replace />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
