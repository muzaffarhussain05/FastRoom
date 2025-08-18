import { test, expect } from "@playwright/test";
const UI_URL = "http://localhost:5173";
test("should not allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign in" }).click();

  await expect(page.getByRole("heading", { name: "Signin" })).toBeVisible();

  await page.locator("[name=email]").fill("test@test.com");
  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Succesful!")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const testEmail=`test_${Math.floor(Math.random()*90000)+10000}@test.com`
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign in" }).click();

  await page.getByRole("link", { name: "Create an account here" }).click();

  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();


await page.locator("[name=firstName]").fill("first Name")
await page.locator("[name=lastName]").fill("Last Name")
await page.locator("[name=email]").fill(testEmail)
await page.locator("[name=password]").fill("123456")
await page.locator("[name=confirmPassword]").fill("123456")

await page.getByRole("button",{name:"Create a Account"}).click()
 await expect(page.getByText("Registration Succes")).toBeVisible();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();



});
