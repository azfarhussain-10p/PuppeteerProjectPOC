import basePage from './basePage'

export default class homePage extends basePage {
	async visit() {
		await page.goto('http://zero.webappsecurity.com/index.html')
		await page.waitForSelector('#nav')
	}

	async clickHomePageLink() {
		await page.click('#homeMenu')
	}

	async clickOnlineBankingLink() {
		await page.click('#onlineBankingMenu')
	}

}
