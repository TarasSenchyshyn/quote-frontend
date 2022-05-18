import { store } from '../..';
import { quoteAdd, quoteFetchingSuccess } from './QuoteSlice';
import {
  addQuoteRequest,
  deleteQuoteRequest,
  editQuoteRequest,
  fetchQuotesRequest,
} from '../../api';

export const fetchQuotes = async () => {
  try {
    const response = await fetchQuotesRequest();

    store.dispatch(quoteFetchingSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const axiosQuoteEdit = async (
  id: string | undefined,
  quote_text: string,
  author: string
) => {
  try {
    await editQuoteRequest(id, quote_text, author);
  } catch (e) {
    console.log(e);
  }
};

export const deleteQuote = async (id: string) => {
  try {
    await deleteQuoteRequest(id);
  } catch (e) {
    console.log(e);
  }
};

export const addQuote = async (quote: string, author: string) => {
  try {
    const response = await addQuoteRequest(quote, author);

    store.dispatch(quoteAdd(response.data));
  } catch (e) {
    console.log(e);
  }
};
