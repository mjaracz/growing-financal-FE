export const useApiCurrencies = () => {
  const baseUrl = 'http://api.exchangeratesapi.io/v1/latest';
  const apiKey = '481b03536817ae9a3877e3026e237f51';

  const getLatestRate = async () => 
    fetch(baseUrl + `?access_key=${apiKey}`)
      .then(res => res.json())
      .then((data) => {
        if (data.statusCode >= 400) {
          throw new Error('User code error 4** status')
        }
        return data;
      })

  return {
    getLatestRate,
    baseUrl,
    apiKey,
  }
}
