import { Button } from '@repo/ui'

import { navbarLinks } from '@/components/constants'

import NavbarLink from './NavbarLink'

const DesktopNavbar = (): JSX.Element => (
	<div className="hidden sm:flex flex-1 items-center justify-between">
		<div className="hidden sm:ml-6 sm:block">
			<div className="flex space-x-4">
				{navbarLinks.map(link => (
					<NavbarLink key={link.id} link={link} />
				))}
			</div>
		</div>
		<Button>Login</Button>
	</div>
)

export default DesktopNavbar
