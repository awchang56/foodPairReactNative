let addy = require('../../server/addy');

const submitSearch = (query, callback) => {
  let passPref;
  // prefHelper.preferences(this.state.prefer);
  return fetch(addy.serverAddress + "/search", {
    method: 'POST',
    data: {
      item: query,
      choices: null
    }
  })
  .then((response) => response.json())
    .then((result) => {
      // console.log('result: ', result)
      callback(result);
    })

  .catch(err => console.log('err: ', err))
};

module.exports.submitSearch = submitSearch;