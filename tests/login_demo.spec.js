import{test,expect} from '@playwright/test';

test('Login Test Demo-1', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();
})

test('Login Test Demo-2',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive...')
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await page.locator('p:has-text("Paul Collings")').click()
    await page.locator('text=Logout').click()
    await page.close();
})

test.only('Login Test Demo-2',async({page})=>{

    
})
