import { test, expect } from "@playwright/test";

test('selectors demo' , async({page})=> {
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').click();
    await page.getByPlaceholder('Search Amazon.in').fill('iphone 14 ');
    await page.getByRole('button', { name: 'iphone 14 pro max 256gb' }).click();
    await page.getByRole('link', { name: 'Android 13.0' }).click();
    await page.getByRole('link', { name: 'Android 13.0' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('heading', { name: 'Apple iPhone 14 Pro Max (256 GB) - Silver' }).getByRole('link', { name: 'Apple iPhone 14 Pro Max (256 GB) - Silver' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'With Exchange Up to 30,000.00 off' }).click();
    await page1.getByRole('button', { name: 'With Exchange Up to 30,000.00 off' }).click();
    await page1.getByRole('button', { name: 'Without Exchange 149,900.00 0.00' }).click();
    await page1.getByTitle('Add to Shopping Cart').click();
    await page1.getByRole('link', { name: 'Exit this panel and return to the product page.' }).click();
  
});
