export const navbarLinks = [
	{
		id: 1,
		label: 'Home',
		section: 'Hero',
		href: '#',
	},
	{
		id: 2,
		label: 'Who am i ?',
		section: 'Description',
		href: '#',
	},
	{
		id: 3,
		label: 'What did i do ?',
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
