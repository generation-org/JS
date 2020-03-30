const axios = require('axios');

async function makeGetRequest() {
  
  let res = await axios.get("http://localhost:3000/users/");

  let data = res.data;
  console.log(data);
}

makeGetRequest();

module.exports = makeGetRequest ;