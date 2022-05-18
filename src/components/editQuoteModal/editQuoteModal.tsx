import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setEditModal } from '../../store/reducers/QuoteSlice';

import './editModal.css';

export const EditQuoteModal: FC = () => {
  const { stateQuoteEdit } = useAppSelector((state) => state.quoteReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onModalClose = () => {
    navigate('/');
    dispatch(setEditModal(false));
  };

  const onStopPropagation = (event: React.MouseEvent) =>
    event.stopPropagation();

  return (
    <div
      className={stateQuoteEdit ? 'modal active' : 'modal'}
      onClick={onModalClose}
    >
      <div
        className={stateQuoteEdit ? 'modal_content active' : 'modal'}
        onClick={onStopPropagation}
      >
        <h3 className="text-success">The quote has been edited!</h3>

        <button className="btn btn-success" onClick={onModalClose}>
          OK
        </button>
      </div>
    </div>
  );
};
