import DesktopNavbar from './Navbar/DesktopNavbar'
import MobileNavbar from './Navbar/MobileNavbar'

const Header = (): JSX.Element => (
	<header className="z-50 relative">
		<nav className="bg-background ">
			<div className="mx-auto max-w-7xl px-6 sm:px-4 lg:px-2">
				<div className="flex h-16 items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt="Your Company"
						/>
					</div>
					<DesktopNavbar />
					<MobileNavbar />
				</div>
			</div>
		</nav>
	</header>
)

export default Header
