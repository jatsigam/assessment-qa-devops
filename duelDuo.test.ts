
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

//Clicking the Draw button displays the div with id = “choices”
test('clicking the Draw button displays the div with id = choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choiceElem = await driver.findElement(By.id('choices'))
    const displayed = await choiceElem.isDisplayed()
    expect(displayed).toBe(true)
})

// “Add to Duo” button displays the div with id = “player-duo”
test('clicking an “Add to Duo” button displays the div with id = player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})


// Check that when a bot is “Removed from Duo”, that it goes back to “choices”