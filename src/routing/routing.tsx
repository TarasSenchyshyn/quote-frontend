import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddQuote from '../components/addQuote/AddQuote';
import { EditQuote } from '../components/editQuote/editQuote';
import { HomePage } from '../components/homePage/HomePage';

export const RoutingConfig: FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-quote" element={<AddQuote />} />
      <Route path="/edit-quote/:id" element={<EditQuote />} />
    </Routes>
  </div>
);
