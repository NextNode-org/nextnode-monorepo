'use client'

import { navbarLinks } from '@/components/constants'

import NavbarLink from './Navbar/NavbarLink'
import MobileNavbar from './Navbar/MobileNavbar'

// const navMotion = {
// 	variants: {
// 		visible: { y: 0 },
// 		hidden: { y: '-100%' },
// 	},
// 	transition: {
// 		duration: 0.35,
// 		ease: 'easeInOut',
// 	},
// } as const

const Header = (): JSX.Element => (
	<header className="sticky bg-card top-0 flex items-center justify-between border-muted border-b">
		<div className="mx-auto max-w-screen-xl w-full px-6 sm:px-4 lg:px-2">
			<div className="flex h-16 items-center justify-between">
				<div className="h8 w-auto">
					<div className="font-title font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/70 text-xl sm:text-2xl lg:text-3xl capitalize">
						Walid Mostefaoui
					</div>
				</div>

				<ul className="hidden sm:flex flex-grow justify-end sm:space-x-6 lg:space-x-8">
					{navbarLinks.map(link => (
						<li key={link.id}>
							<NavbarLink
								link={link}
								className="font-light text-primary"
							/>
						</li>
					))}
				</ul>
				<MobileNavbar />
			</div>
		</div>
	</header>
)

export default Header
