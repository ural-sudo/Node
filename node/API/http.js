
const https = require('https');

https.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello",(response)=>{
    let data = '';
    response.on('data',chunk => {
        /* console.log(chunk); */
        data = data + chunk;
    });

    response.on('end' , _ => {
        const json = JSON.parse(data);
        
        console.log(json[0].phonetics);
    });
});