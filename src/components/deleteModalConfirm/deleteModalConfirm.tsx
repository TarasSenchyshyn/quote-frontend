import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteQuote } from '../../store/reducers/ActionCreators';
import { deleteModalConfirm } from '../../store/reducers/QuoteSlice';

import './deleteModalConfirm.css';

export const DeleteModalConfirm: FC = () => {
  const { stateDeleteModalConfirm, deleteId } = useAppSelector(
    (state) => state.quoteReducer
  );
  const dispatch = useAppDispatch();

  const onDeleteModalConfirm = () => dispatch(deleteModalConfirm(false));

  const onConfirm = (e: React.MouseEvent) => {
    e.preventDefault();

    onDeleteModalConfirm();
    deleteQuote(deleteId);
  };

  const onStopPropagation = (event: React.MouseEvent) =>
    event.stopPropagation();

  return (
    <div
      className={stateDeleteModalConfirm ? 'modal active' : 'modal'}
      onClick={onDeleteModalConfirm}
    >
      <div
        className={stateDeleteModalConfirm ? 'modal_content active' : 'modal'}
        onClick={onStopPropagation}
      >
        <h3 className="text-danger">Do you want to delete the quote?</h3>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onConfirm}>
            OK
          </button>

          <button
            className="btn btn-danger pl-2"
            onClick={onDeleteModalConfirm}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};
