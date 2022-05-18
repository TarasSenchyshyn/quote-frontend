import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addQuoteModal } from '../../store/reducers/QuoteSlice';

import './addQuoteModal.css';

export const AddQuoteModal: FC = () => {
  const { stateQuoteModal } = useAppSelector((state) => state.quoteReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onModalClose = () => {
    navigate('/');
    dispatch(addQuoteModal(false));
  };

  const onStopPropagation = (event: React.MouseEvent) =>
    event.stopPropagation();

  return (
    <div
      className={stateQuoteModal ? 'modal active' : 'modal'}
      onClick={onModalClose}
    >
      <div
        className={stateQuoteModal ? 'modal_content active' : 'modal'}
        onClick={onStopPropagation}
      >
        <h3 className="text-success">The quote has been added!</h3>

        <button className="btn btn-success" onClick={onModalClose}>
          OK
        </button>
      </div>
    </div>
  );
};
