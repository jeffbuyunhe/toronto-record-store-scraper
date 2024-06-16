import { POP_MUSIC } from '../constants.js';

export async function scrape(browser, query) {
    const page = await browser.newPage();
    await page.goto(`${POP_MUSIC}${encodeURIComponent(query)}`);

    try {
        const first_record = await page.$eval(".wrapper .product .info a", e => e.href);
        await page.goto(first_record);

        try {
            const title = await page.$eval(".page-title h1", e => e.textContent);
            const img = await page.$eval(".product-img img", e => e.src);
            const price = await page.$eval(".price", e => e.textContent);
            const availability = await page.$eval(".availability span", e => e.textContent);

            await page.close();
            return {
                title: title.trim(),
                img: img,
                price: price.trim(),
                availability: availability,
            }
        }
        catch (e) {
            await page.close();
            return { error: "Could not get product details" };
        }
    }
    catch (e) {
        await page.close();
        return { error: "No products found" };
    }
};