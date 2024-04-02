'use client'

import { useState } from 'react'

import { Button, Sheet, SheetContent, SheetContentClose } from '@repo/ui'
import { cn } from '@repo/utils/functions'
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
					className={cn(
						isOpen
							? 'bg-background focus:bg-background hover:bg-background'
							: 'bg-accent focus:bg-accent hover:bg-accent',
					)}
					onClick={() => {
						setIsOpen(!isOpen)
					}}>
					<Menu className="text-foreground" />
				</Button>
			</div>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent
					side="right"
					defaultClose={false}
					className="flex justify-evenly bg-background flex-col gap-20 py-20 text-2xl font-semibold">
					{navbarLinks.map(link => (
						<NavbarLink key={link.id} link={link} />
					))}
					<SheetContentClose
						size="xl"
						className="text-primary top-6 right-8"
					/>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default MobileNavbar
