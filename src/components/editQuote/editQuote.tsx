import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IInput } from '../../models/IInput';
import { axiosQuoteEdit } from '../../store/reducers/ActionCreators';
import { setEditModal } from '../../store/reducers/QuoteSlice';
import { EditQuoteModal } from '../editQuoteModal/editQuoteModal';

export const EditQuote: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { setObj } = useAppSelector((state) => state.quoteReducer);

  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useEffect(() => {
    setQuote(setObj.quote_text);

    setAuthor(setObj.author);
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!quote || !author) return;

    axiosQuoteEdit(params.id, quote, author);
    dispatch(setEditModal(true));
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
            placeholder="Quote quote"
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
          Edit Quote
        </button>
      </form>
      <EditQuoteModal />
    </div>
  );
};
