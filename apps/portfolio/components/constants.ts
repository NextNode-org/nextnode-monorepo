export const navbarLinks = [
	{
		id: 1,
		label: 'Home',
		section: 'Hero',
		href: '#',
	},
	{
		id: 2,
		label: 'About me',
		section: 'Description',
		href: '#',
	},
	{
		id: 3,
		label: 'My projects',
		section: 'Projects',
		href: '#',
	},
	{
		id: 4,
		label: 'Contact me',
		section: 'Contact',
		href: '#',
	},
] as const
export type NavbarLink = (typeof navbarLinks)[number]

export const sections = navbarLinks.map(({ section }) => section)
export type Sections = (typeof sections)[number]
