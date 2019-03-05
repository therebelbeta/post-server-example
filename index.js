const parse = require('urlencoded-body-parser');

module.exports = async req => {
  const data = await parse(req);
  console.log(data);
  // do something with the data here
  return 'Data logged to your console';
};