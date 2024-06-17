export async function scrape(browser, query, baseUrl, productLink, htmlTitle, htmlImg, htmlPrice, htmlAvail) {
    const page = await browser.newPage();
    await page.goto(`${baseUrl}${encodeURIComponent(query)}`);

    try {
        const first_record = await page.$eval(productLink, e => e.href);
        await page.goto(first_record);

        try {
            const title = await page.$eval(htmlTitle, e => e.textContent);
            const img = await page.$eval(htmlImg, e => e.src);
            const price = await page.$eval(htmlPrice, e => e.textContent);
            const availability = await page.$eval(htmlAvail, e => e.textContent);

            await page.close();
            return {
                title: title.trim(),
                img: img.trim(),
                price: price.trim(),
                availability: availability.trim(),
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