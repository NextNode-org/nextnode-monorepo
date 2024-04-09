import { navbarLinks } from '@/components/constants'

import MobileNavbar from './Navbar/MobileNavbar'
import NavbarLink from './Navbar/NavbarLink'

const Header = (): JSX.Element => (
	<header className="z-50 relative">
		<nav className="bg-background ">
			<div className="mx-auto max-w-screen-xl px-6 sm:px-4 lg:px-2">
				<div className="flex h-16 items-center justify-between">
					<div className="h8 w-auto">
						<div className="font-title font-bold leading-none tracking-tighter text-accent-foreground sm:text-xl lg:text-2xl capitalize">
							Walid Mostefaoui
						</div>
					</div>
					<div className="hidden sm:flex flex-grow justify-end space-x-4">
						{navbarLinks.map(link => (
							<NavbarLink key={link.id} link={link} />
						))}
					</div>
					<MobileNavbar />
				</div>
			</div>
		</nav>
	</header>
)

export default Header
