import React, { FC, useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { addQuote } from '../../store/reducers/ActionCreators';
import { addQuoteModal } from '../../store/reducers/QuoteSlice';
import { AddQuoteModal } from '../addQouteModal/addQuoteModal';
import { IInput } from '../../models/IInput';

import './addQuote.css';

const AddQuote: FC = () => {
  const dispatch = useAppDispatch();

  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!quote || !author) return;
    addQuote(quote, author);
    dispatch(addQuoteModal(true));
  };

  const handleQuoteChange = ({ target: { value } }: IInput) => setQuote(value);

  const handleAuthorChange = ({ target: { value } }: IInput) =>
    setAuthor(value);

  return (
    <div className="bg-secondary height">
      <form>
        <div className="form-group container col-sm-4 pt-2">
          <input
            className="form-control"
            type="text"
            placeholder="Quote"
            value={quote}
            onChange={handleQuoteChange}
          />
        </div>

        <div className="form-group container col-sm-4 pt-1">
          <input
            className="form-control"
            type="text"
            value={author}
            placeholder="Author name"
            onChange={handleAuthorChange}
          />
        </div>

        <button
          className="btn btn-light mt-1"
          type="submit"
          disabled={!quote || !author}
          onClick={handleSubmit}
        >
          Add Quote
        </button>
      </form>
      <AddQuoteModal />
    </div>
  );
};

export default AddQuote;
