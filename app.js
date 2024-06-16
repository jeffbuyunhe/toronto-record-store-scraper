import { scrape as popMusicScrape } from "./scrappers/pop-music.js";
import { scrape as sonicBoomScrape } from "./scrappers/sonic-boom.js";

const query = "Bjork vespertine";

popMusicScrape(query).then(res => console.log(res));
