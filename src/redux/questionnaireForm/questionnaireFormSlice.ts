import { createSlice } from '@reduxjs/toolkit';
import { useApiCurrencies } from 'common/useApiCurrencies';
import { CurrenciesResponse } from 'molecules/currencySelect';
import { initialState } from './initialState';
import { CurrencyRate } from 'molecules/currencySelect'
import { prepareCurrenciesData } from 'common/prepareCurrenciesData';
import { RootState } from 'redux/store';

const questionnaireFormSlice = createSlice({
  name: 'questionnaireForm',
  initialState,
  reducers: {
    getCurrenciesRate(state) {
      state.status = 'loading';
    },
    fetchCurrenciesRate(state, action) {
      state.status = 'successful';
      state.currencies = action.payload;
    },
    errorCurrenciesRate(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    saveFormData(state, action) {
      state.formData = action.payload
    }
  },
});

export const { getCurrenciesRate, fetchCurrenciesRate, errorCurrenciesRate, saveFormData } = questionnaireFormSlice.actions;

export const getCurrenciesRateAsync = () => async dispatch => {
  dispatch(getCurrenciesRate());
  const { getLatestRate } = useApiCurrencies();

  try {
    const currenciesData: CurrenciesResponse = await getLatestRate();
    const currenciesRates: CurrencyRate[] = prepareCurrenciesData(currenciesData);
    dispatch(fetchCurrenciesRate(currenciesRates));
  }
  catch (error) {
    dispatch(errorCurrenciesRate(error));
  }
};

export const selectCurrencies = (state: RootState) => state.questionnaireForm.currencies;
export const selectStatus = (state: RootState) => state.questionnaireForm.status;
export const selectFormData = (state: RootState) => state.questionnaireForm.formData;

export default questionnaireFormSlice.reducer;