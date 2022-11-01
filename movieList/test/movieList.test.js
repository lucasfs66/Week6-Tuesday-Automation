const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')



const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

const {addMovie, crossOver, deleteMovie, uncross} = require('../functions/functionMovie')

afterAll(async () => {
    await driver.quit()
})
describe('movie tests', () => {
test('add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(5000)
});

test('crossover', async () => {
    await crossOver(driver)
    await driver.sleep(5000)
})

test('uncross', async () => {
    await uncross(driver)
    await driver.sleep(5000)
})

test('delete', async () => {
    await deleteMovie(driver)
    await driver.sleep(5000)
})
})