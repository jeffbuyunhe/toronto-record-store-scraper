import puppeteer from "puppeteer";
import { scrape as popMusicScrape } from "./scrapers/pop-music.js";
import { scrape as sonicBoomScrape } from "./scrapers/sonic-boom.js";

const query = "Bjork vespertine";

const browser = await puppeteer.launch({ headless: false });
popMusicScrape(browser, query).then(res => console.log(res));
