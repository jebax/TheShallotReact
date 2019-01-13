export const config = {
  newsUrl: 'https://newsapi.org/v2/top-headlines?sources=',
  guardianUrl: `https://newsapi.org/v2/top-headlines?sources=the-guardian-uk&apiKey=${process.env.REACT_APP_NEWS_KEY}`,
  aylienUrl: 'https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url='
}
