
const cheerio = require('cheerio');
const axios = require("axios");
const TorrentSearchApi = require('torrent-search-api');
const t1 = 'TorrentLeech'; // categories: ['All','Movies','TV','Games','Apps','Education','Animation', 'Books','Music','Foreign']
const t2 = 'IpTorrents';  //categories: [ 'All', 'Movies', 'TV', 'Games', 'Music' ]
const t3 = 'Torrent9';  //categories: ['All','Movies','TV','Music','Apps','Books','Top100']
const t4 = 'Torrentz2';  //categories: [ 'All' ]
const t5 = '1337x';  //categories: ['All', 'Movies','TV','Games','Music','Anime','Applications''Documentaries','Xxx','Other','Top100']
const t6 = 'ThePirateBay';  //categories: ['All','Audio','Video','Applications','Games','Porn','Other','Top100']
const t7 = 'YggTorrent';  //categories: ['All','Videos','Movies','TV','Emulation','Games','Applications', 'Music','Books', 'GPS','XXX']
const t8 = 'KickassTorrents';  //categories: ['All','Movies','TV','Music','Games','Books','Applications','Anime']
const t9 = 'Rarbg';  //categories: ['All','Movies','XXX','Games','TV','Music','Apps','Books']
const t10 = 'TorrentProject'; //categories: [ 'All' ]
const t11 = 'Yts'; //categories: [ 'All', 'Movies' ]
const t12 = 'Limetorrents'; //categories: ['All','Movies','TV','Games','Music','Applications','Anime']
const t13 = 'Eztv';  //categories: [ 'All' ]

TorrentSearchApi.disableAllProviders();
TorrentSearchApi.enableProvider(t5);



const consulta = "?query_term";
const tpbay = "https://thepiratebay.org/search.php?q=top100:201";
const semana = "https://www.semana.com/"
const t1357 = "https://www.1377x.to/top-100-movies"

export async function init() {


    // Search '1080' in 'Movies' category and limit to 20 results
    const providers = TorrentSearchApi.getProviders();
    const torrents = await TorrentSearchApi.search('Mandalorian', 'Movies', 3);

    return (torrents);
    // const response = await axios.get(t1357);
    // const $ = cheerio.load(response.data);
    // const datos = $('td.coll-1 name');
    // 
    // data.map((index,element)=>{
    //     console.log(element.text());
    // })

}


