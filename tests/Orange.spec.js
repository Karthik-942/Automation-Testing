import{test,expect} from "@playwright/test";


test('Orange Demo',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')
    await page.getByRole("button","Login").click()
    await page.waitForTimeout(3000)
})