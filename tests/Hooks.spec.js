import {test,expect} from '@playwright/test'


// Global hooks - run once for entire test suite
test.beforeAll(async()=>{
    console.log("========== TEST SUITE STARTED ==========")
})

test.afterAll(async()=>{
    console.log("========== TEST SUITE COMPLETED ==========")
})

// Describe block with group-level hooks
test.describe("Keka Login Page - Hooks Demo", async()=>{

    // Group-level hook: Before each test in this group
    test.beforeEach(async({page})=>{
        console.log(">>> beforeEach: Navigating to login page")
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        await page.waitForLoadState('networkidle')
        console.log(">>> beforeEach: Page loaded successfully")
    })

    // Group-level hook: After each test in this group
    test.afterEach(async({page}, testInfo)=>{
        console.log("<<< afterEach: Test completed - " + testInfo.title)
        console.log(`Test status: ${testInfo.status}`)
    })

    // Test 1: Verify login page elements are visible
    test("Test1 - Verify Email Input Field Visibility", async({page})=>{
        console.log("Test1: Starting email field verification")

        // Verify email input field exists and is visible
        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await expect(emailField).toBeVisible()

        // Interact with the field
        await emailField.fill("chitakula@cixecnt.com")
        const inputValue = await emailField.inputValue()
        expect(inputValue).toBe("chitakula@cixecnt.com")

        console.log("Test1: Email field verification passed")
    })

    // Test 2: Verify Continue button presence and clickability
    test("Test2 - Verify Continue Button", async({page})=>{
        console.log("Test2: Starting continue button verification")

        const continueButton = page.locator("button:has-text('Continue')")
        await expect(continueButton).toBeVisible()
        await expect(continueButton).toBeEnabled()

        console.log("Test2: Continue button verification passed")
    })

    // Test 3: Verify "Continue with Mobile" button
    test("Test3 - Verify Continue with Mobile Button", async({page})=>{
        console.log("Test3: Starting mobile continue button verification")

        const mobileButton = page.locator("button:has-text('Continue with Mobile')")
        await expect(mobileButton).toBeVisible()
        await expect(mobileButton).toBeEnabled()

        console.log("Test3: Mobile continue button verification passed")
    })

    // Test 4: Verify "Continue with Microsoft" button
    test("Test4 - Verify Continue with Microsoft Button", async({page})=>{
        console.log("Test4: Starting Microsoft continue button verification")

        const microsoftButton = page.locator("button:has-text('Continue with Microsoft')")
        await expect(microsoftButton).toBeVisible()

        console.log("Test4: Microsoft continue button verification passed")
    })

    // Test 5: Verify "Continue with Google" button
    test("Test5 - Verify Continue with Google Button", async({page})=>{
        console.log("Test5: Starting Google continue button verification")

        const googleButton = page.locator("button:has-text('Continue with Google')")
        await expect(googleButton).toBeVisible()

        console.log("Test5: Google continue button verification passed")
    })

    // Test 6: Verify "Continue with Username" button
    test("Test6 - Verify Continue with Username Button", async({page})=>{
        console.log("Test6: Starting Username continue button verification")

        const usernameButton = page.locator("button:has-text('Continue with Username')")
        await expect(usernameButton).toBeVisible()

        console.log("Test6: Username continue button verification passed")
    })

    // Test 7: Clear email field after filling
    test("Test7 - Clear Email Field", async({page})=>{
        console.log("Test7: Starting field clear test")

        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await emailField.fill("test@example.com")
        await emailField.clear()

        const clearedValue = await emailField.inputValue()
        expect(clearedValue).toBe("")

        console.log("Test7: Field clear test passed")
    })

    // Test 8: Verify page title
    test("Test8 - Verify Page Title", async({page})=>{
        console.log("Test8: Starting page title verification")

        const pageTitle = await page.title()
        expect(pageTitle).toContain("Keka")

        console.log(`Test8: Page title verified - "${pageTitle}"`)
    })

    // Test 9: Verify page heading
    test("Test9 - Verify Login Heading", async({page})=>{
        console.log("Test9: Starting heading verification")

        const heading = page.locator("p:has-text('Login to Keka')")
        await expect(heading).toBeVisible()

        console.log("Test9: Heading verification passed")
    })

    // Test 10: Mark as slow - demonstrates test.slow()
    test("Test10 - Slow Test with Timeout", async({page})=>{
        console.log("Test10: Starting slow test")
        test.slow()  // Marks this test as slow (triple timeout)

        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await emailField.fill("slowtest@example.com")
        await page.waitForTimeout(2000)  // Intentional wait

        const value = await emailField.inputValue()
        expect(value).toBe("slowtest@example.com")

        console.log("Test10: Slow test completed")
    })

    // Test 11: Custom timeout - demonstrates test.setTimeout()
    test("Test11 - Custom Timeout Test", async({page})=>{
        console.log("Test11: Starting custom timeout test")
        test.setTimeout(15000)  // Set custom timeout of 15 seconds

        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await emailField.fill("timeout@example.com")

        console.log("Test11: Custom timeout test passed")
    })

    // Test 12: Skip demo - demonstrates test.skip()
    test("Test12 - Skipped Test Demo", async({page})=>{
        console.log("Test12: This should not run")
        test.skip()  // This test will be skipped

        throw new Error("This error should not occur because test is skipped")
    })

    // Test 13: Conditional skip
    test("Test13 - Conditional Skip Test", async({page})=>{
        console.log("Test13: Conditional skip test")

        // Skip test only on specific conditions
        test.skip(process.platform === 'win32', 'Skipping on Windows')

        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await expect(emailField).toBeVisible()
    })

    // Test 14: Run only this test - comment out test.only() to run all tests
    // Uncomment the next line to run ONLY this test
    // test.only("Test14 - Run Only This Test", async({page})=>{
    test("Test14 - Run Only This Test (Disabled)", async({page})=>{
        console.log("Test14: Run only demo")

        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await emailField.fill("onlytest@example.com")

        const value = await emailField.inputValue()
        expect(value).toBe("onlytest@example.com")

        console.log("Test14: Run only test passed")
    })

})