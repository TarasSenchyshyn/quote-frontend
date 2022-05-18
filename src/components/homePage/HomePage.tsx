import React, { FC } from 'react';

import { QuotesList } from '../Quotelist/QuotesList';
import { DeleteModalConfirm } from '../deleteModalConfirm/deleteModalConfirm';

import './homePage.css';

export const HomePage: FC = () => (
  <div className="bg-secondary heightHome">
    <div className="container row mx-auto">
      <QuotesList />

      <DeleteModalConfirm />
    </div>
  </div>
);
