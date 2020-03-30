const axios = require('axios');

async function makeDeleteRequest(userNum) {

    let res = await axios.delete("http://localhost:3000/users/3");

    console.log(res.status);
}

makeDeleteRequest();
