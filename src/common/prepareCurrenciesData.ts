import { CurrenciesResponse } from 'molecules/currencySelect';
import { CurrencyRate } from 'molecules/currencySelect';

export function prepareCurrenciesData(currenciesResponse: CurrenciesResponse): CurrencyRate[] {
  const currenciesKeys: string[] = Object.keys(currenciesResponse.rates);
  const currenciesValues: number[] = Object.values(currenciesResponse.rates);
  const preparedCurrencies = [];
  for (let i = 0; i < currenciesKeys.length; i++) {
    const currencyRate = {}
    currencyRate[currenciesKeys[i]] = currenciesValues[i];
    preparedCurrencies.push(currencyRate)
  }
  return preparedCurrencies;
}