import Link from 'next/link'

import type { NavbarLink as LinkType } from '@/components/constants'

interface LinkProps {
	link: LinkType
}
const NavbarLink = ({ link: { id, href, label } }: LinkProps): JSX.Element => (
	<Link key={id} href={href} className="text-red-500 duration-500">
		{label}
	</Link>
)

export default NavbarLink
