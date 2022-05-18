import { IQuote } from '../../models/IQoute';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuoteState {
  quotes: IQuote[];
  stateQuoteModal: boolean;
  stateDeleteModalConfirm: boolean;
  stateQuoteEdit: boolean;
  deleteId: string;
  setObj: IQuote;
}

const initialState: QuoteState = {
  quotes: [],
  stateQuoteModal: false,
  stateQuoteEdit: false,
  stateDeleteModalConfirm: false,
  deleteId: '',
  setObj: {
    _id: '',
    quote_text: '',
    author: '',
  },
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    quoteFetchingSuccess(state, action: PayloadAction<IQuote[]>) {
      state.quotes = action.payload;
    },
    quoteAdd(state, action: PayloadAction<IQuote>) {
      state.quotes = [...state.quotes, action.payload];
    },
    addQuoteModal(state, action: PayloadAction<boolean>) {
      state.stateQuoteModal = action.payload;
    },
    deleteModalConfirm(state, action: PayloadAction<boolean>) {
      state.stateDeleteModalConfirm = action.payload;
    },
    deleteID(state, action: PayloadAction<string>) {
      state.deleteId = action.payload;
    },
    setEditObj(state, action: PayloadAction<IQuote>) {
      state.setObj = action.payload;
    },
    setEditModal(state, action: PayloadAction<boolean>) {
      state.stateQuoteEdit = action.payload;
    },
  },
});

export const {
  quoteFetchingSuccess,
  quoteAdd,
  addQuoteModal,
  deleteModalConfirm,
  deleteID,
  setEditObj,
  setEditModal,
} = quoteSlice.actions;

export default quoteSlice.reducer;
