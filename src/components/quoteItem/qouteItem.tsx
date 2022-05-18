import { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { IQuote } from '../../models/IQoute';
import {
  deleteID,
  deleteModalConfirm,
  setEditObj,
} from '../../store/reducers/QuoteSlice';

export interface IItemProp {
  quote: IQuote;
}

export const QuoteItem: FC<IItemProp> = ({ quote }) => {
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(setEditObj(quote));
  }, [quote, dispatch]);

  const onDelete = useCallback(() => {
    dispatch(deleteModalConfirm(true));

    dispatch(deleteID(quote._id));
  }, [quote._id, dispatch]);

  return (
    <div className="col-md-4 mt-4 mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-quote tex-dark">Quote: "{quote.quote_text}"</h5>

          <h6 className="card-subquote mb-2 text-muted">
            Author: {quote.author}
          </h6>

          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-dark" onClick={onDelete}>
              Delete
            </button>

            <NavLink to={`/edit-quote/${quote._id}`}>
              <button className="btn btn-outline-dark" onClick={onEdit}>
                Edit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
