
export const getCoins = () => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'd65829ddaemsh6b46f24e6aa18a5p19c278jsn738e2d130ed8',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };        
        
        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            return data;
        })
          .catch(err => console.error(err));
}

