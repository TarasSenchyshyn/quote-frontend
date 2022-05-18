import { FC, useEffect } from 'react';

import { useAppSelector } from '../../hooks/redux';
import { fetchQuotes } from '../../store/reducers/ActionCreators';
import { QuoteItem } from '../quoteItem/qouteItem';

export const QuotesList: FC = () => {
  const { quotes, stateDeleteModalConfirm } = useAppSelector(
    (state) => state.quoteReducer
  );

  useEffect(() => {
    fetchQuotes();
  }, [stateDeleteModalConfirm]);

  return (
    <>
      {quotes &&
        quotes.map((quote) => <QuoteItem key={quote._id} quote={quote} />)}
    </>
  );
};
