import axios from 'axios';

import { IQuote } from '../models/IQoute';
import { baseUrl } from '../constants';

export const fetchQuotesRequest = async () => {
  return await axios.get<any>(`${baseUrl}api/quotes`);
};

export const editQuoteRequest = async (
  id: string | undefined,
  quote_text: string,
  author: string
) => {
  return axios.put<IQuote>(`${baseUrl}api/quotes/update-quote/${id}`, {
    quote_text: quote_text,
    author: author,
  });
};

export const deleteQuoteRequest = async (id: string) => {
  return axios.delete<IQuote>(`${baseUrl}/api/quotes/delete/${id}`);
};

export const addQuoteRequest = async (quote: string, author: string) => {
  return await axios.post<IQuote>(`${baseUrl}api/quotes/create`, {
    quote_text: quote,
    author: author,
  });
};
