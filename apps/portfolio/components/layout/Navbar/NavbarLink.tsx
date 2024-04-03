'use client'

import Link from 'next/link'

import { cn } from '@repo/utils/functions'
import { useAtomValue } from 'jotai'

import { sectionInViewAtom } from '@/components/atoms'

import type { NavbarLink as LinkType } from '@/components/constants'

interface LinkProps {
	link: LinkType
}
const NavbarLink = ({
	link: { id, href, section, label },
}: LinkProps): JSX.Element => {
	const visibleSection = useAtomValue(sectionInViewAtom)
	console.log({ visibleSection, section })
	return (
		<Link
			key={id}
			href={href}
			className={cn(
				visibleSection === section ? 'text-red-500' : 'text-blue-300',
			)}>
			{label}
		</Link>
	)
}

export default NavbarLink
