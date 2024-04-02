'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@repo/utils/functions'

import type { NavbarLink as LinkType } from '@/components/constants'

interface LinkProps {
	link: LinkType
}
const NavbarLink = ({ link: { id, href, label } }: LinkProps): JSX.Element => {
	const pathname = usePathname()
	console.log({ pathname, href })
	return (
		<Link
			key={id}
			href={href}
			className={cn(
				pathname === href ? 'text-red-500' : 'text-blue-300',
			)}>
			{label}
		</Link>
	)
}

export default NavbarLink
