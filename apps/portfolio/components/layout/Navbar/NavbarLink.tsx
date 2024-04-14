'use client'

import Link from 'next/link'

import { cn } from '@repo/utils/functions'
import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'

import { sectionInViewAtom } from '@/components/atoms'

import type { NavbarLink as LinkType } from '@/components/constants'

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
	link: LinkType
}

const NavbarLink = ({
	link: { href, section, label },
	className,
	...props
}: LinkProps): JSX.Element => {
	const visibleSection = useAtomValue(sectionInViewAtom)
	const isVisible = visibleSection === section
	return (
		<>
			<Link
				{...props}
				href={href}
				className={cn(
					className,
					isVisible && 'text-accent font-semibold',
				)}>
				{label}
				{isVisible ? (
					<motion.div
						layoutId="underline"
						className="block max-w-full h-0.5 bg-accent"
					/>
				) : null}
			</Link>
		</>
	)
}

export default NavbarLink
