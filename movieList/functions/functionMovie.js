const {By} = require('selenium-webdriver')

let movieName = 'Dog'


module.exports = {
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys(`${movieName}`)

        await driver.findElement(By.xpath('//button')).click()

        const name = await driver.findElement(By.xpath('//li'))

        const screenName = name.isDisplayed()

        expect(screenName).toBeTruthy
    }, 
    crossOver: async (driver) => {
        await driver.findElement(By.xpath(`//span[text()='${movieName}']`)).click()

        expect(await driver.findElement(By.xpath(`//aside[text()='${movieName} watched!']`))).toBeTruthy
    },
    uncross: async (driver) => {
        await driver.findElement(By.xpath(`//span[text()='${movieName}']`)).click()

        expect(await driver.findElement(By.xpath(`//aside[text()='${movieName} added back!']`))).toBeTruthy
    },
    deleteMovie: async (driver) => {
        await driver.findElement(By.id(`${movieName}`)).click()
        expect(await driver.findElement(By.xpath(`//aside[text()='${movieName} deleted!']`))).toBeTruthy
    },
    

}