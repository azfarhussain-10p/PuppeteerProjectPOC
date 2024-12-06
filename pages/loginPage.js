import basePage from './basePage'

export default class loginPage extends basePage {
	async visit() {
		await page.goto('http://zero.webappsecurity.com/login.html')
	}

	async isLoginFormDisplayed() {
		await page.waitForSelector('#login_form')
		await page.waitForSelector('#user_login')
		await page.waitForSelector('#user_password')
	}

	async login(userName, userPassword) {
		await page.type('#user_login', userName)
		await page.type('#user_password', userPassword)
		await page.click('.btn-primary')
	}
}
