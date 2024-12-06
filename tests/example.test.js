import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import topBar from '../pages/components/topBar'

describe('Example', () => {
	let homepage
	let loginpage
	let topbar

	beforeAll(async () => {
		jest.setTimeout(20000)
		homepage = new homePage()
		loginpage = new loginPage()
		topbar = new topBar()
	})

	it('Homepage should work', async () => {
		await homepage.visit()
	})

	it('Nav Bar should be displayed', async () => {
		await homepage.isNavbarDisplayed()
	})

	it('Top Bar should be displayed', async () => {
		await topbar.isTopBarDisplayed()
	})

	it('Navigate to Login Page', async () => {
		await loginpage.visit()
	})

	it('Verify Login Page', async () => {
		await loginpage.isLoginFormDisplayed()
	})

	it('Login with valid Credentials', async () => {
		await loginpage.login('username', 'password')
		await loginpage.wait(5000)
	})
})
