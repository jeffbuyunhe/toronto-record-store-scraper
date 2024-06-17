import puppeteer from "puppeteer";
import { scrape as popMusicScrape } from "./scrapers/pop-music.js";
import { scrape as sonicBoomScrape } from "./scrapers/sonic-boom.js";
import { scrape as deadDogScrape } from "./scrapers/dead-dog.js";
import { scrape as kopsScrape } from "./scrapers/kops.js";

const query = "when the pawn";

const browser = await puppeteer.launch();
popMusicScrape(browser, query).then(res => console.log(res));
sonicBoomScrape(browser, query).then(res => console.log(res));
deadDogScrape(browser, query).then(res => console.log(res));
kopsScrape(browser, query).then(res => console.log(res));
deadDogScrape(browser, query).then(res => console.log(res));
