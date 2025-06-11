import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OwnersPage from './pages/OwnersPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { CreatePropertyPage } from './pages/CreatePropertyPage';
import { PropertyTracePage } from './pages/PropertyTracePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/owners" element={<OwnersPage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/createProperty" element={<CreatePropertyPage />} />
      <Route path="/propertyTrace" element={<PropertyTracePage />} />
    </Routes>
  );
};

export default App;
