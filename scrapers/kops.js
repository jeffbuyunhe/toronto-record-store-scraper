import { KOPS } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query) {
    return baseScrape(browser, query, KOPS, ".prod-card a",
        ".text-component h1", ".img-mag img", ".product__price", ".in-stock");
}; 