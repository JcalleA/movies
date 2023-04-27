
const cheerio =require( 'cheerio');
const  axios =require("axios");



    
    async function init(){
        const response =await axios.get("https://1337x.to/popular-movies");
        console.log(response);

    }
    // const $ = cheerio.load('<ul id="fruits">...</ul>');


init()




