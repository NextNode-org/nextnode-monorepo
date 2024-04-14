export const navbarLinks = [
	{
		id: 1,
		label: 'Home',
		section: 'Hero',
		href: '#Hero',
	},
	{
		id: 2,
		label: 'About me',
		section: 'Description',
		href: '#Description',
	},
	{
		id: 3,
		label: 'My projects',
		section: 'Projects',
		href: '#Projects',
	},
	{
		id: 4,
		label: 'Contact me',
		section: 'Contact',
		href: '#Contact',
	},
] as const
export type NavbarLink = (typeof navbarLinks)[number]

export const sections = navbarLinks.map(({ section }) => section)
export type Sections = (typeof sections)[number]
