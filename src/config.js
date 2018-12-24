export const config = {
  guardianUrl: `http://content.guardianapis.com/search?section=technology&show-fields=thumbnail&order-by=newest&page-size=10&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`,
  aylienUrl: 'https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url='
}
