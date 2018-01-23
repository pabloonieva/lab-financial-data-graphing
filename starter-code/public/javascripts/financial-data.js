axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
.then(result => console.log(result))
.catch(err => console.log(err))
