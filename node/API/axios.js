const axios = require('axios');


axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello").then(result =>{
    
    console.log(result.data);
});
