import { SONIC_BOOM } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query) {
    const data = await baseScrape(browser, query, SONIC_BOOM, ".product-list .product-item a",
        ".product-meta h1", ".aspect-ratio img", ".price", ".flair-badge-layout > div");

    data.img = data.img.replace("60x", "1660x");

    return data;
};