import basePage from './basePage'

export default class homePage extends basePage {
	async visit() {
		await page.goto('http://zero.webappsecurity.com/index.html')
		await page.waitForSelector('#nav')
	}

	async isNavbarDisplayed() {
		await page.waitForSelector('#page-nav')
		await page.waitForSelector('#homeMenu')
		await page.waitForSelector('#onlineBankingMenu')
		await page.waitForSelector('#feedback')
	}

	async clickHomePageLink() {
		await page.click('#homeMenu')
	}

	async clickOnlineBankingLink() {
		await page.click('#onlineBankingMenu')
	}

	async clickFeedbackLink() {
		await page.click('#feedback')
	}
}
