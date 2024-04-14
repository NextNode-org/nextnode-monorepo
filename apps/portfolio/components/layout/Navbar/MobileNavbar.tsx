'use client'

import { useState } from 'react'

import { Button, Sheet, SheetContent, SheetContentClose } from '@repo/ui'
import { Menu } from 'lucide-react'

import { navbarLinks } from '@/components/constants'

import NavbarLink from './NavbarLink'

const MobileNavbar = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="block sm:hidden items-center">
				<Button
					size="icon"
					variant="ghost"
					className={
						'bg-background focus:bg-background hover:bg-background border border-muted '
					}
					onClick={() => {
						setIsOpen(!isOpen)
					}}>
					<Menu className="text-primary" />
				</Button>
			</div>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent
					side="right"
					defaultClose={false}
					className="grid place-items-center bg-background flex-col text-2xl font-semibold">
					<ul className="flex flex-col w-full justify-between items-center h-3/5">
						{navbarLinks.map(link => (
							<li key={link.id}>
								<NavbarLink
									className="font-light text-primary"
									link={link}
								/>
							</li>
						))}
					</ul>
					<SheetContentClose
						size="xl"
						className="text-primary top-4 rounded p-1 right-6 border border-muted"
					/>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default MobileNavbar
