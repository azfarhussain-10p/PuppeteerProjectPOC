export default class basePage {
	async wait(time) {
		await page.waitFor(time)
	}

	async getTitle() {
		return await page.title()
	}

	async getUrl() {
		return await page.url()
	}
}
