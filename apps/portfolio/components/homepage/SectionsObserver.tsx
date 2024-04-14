'use client'
import { useSetAtom } from 'jotai'
import { InView } from 'react-intersection-observer'
import { cn } from '@repo/utils/functions'

import { sectionInViewAtom } from '@/components/atoms'

import type { Sections } from '@/components/constants'

interface ReactObserverProps
	extends React.HTMLProps<HTMLDivElement>,
		React.PropsWithChildren {
	name: Sections
}

const SectionsObserver = ({
	children,
	name,
	className,
	...props
}: ReactObserverProps): JSX.Element => {
	const setVisibleSection = useSetAtom(sectionInViewAtom)

	const setInView = (
		inView: boolean,
		entry: IntersectionObserverEntry,
	): void => {
		if (inView) {
			setVisibleSection(entry.target.getAttribute('id') as Sections)
		}
	}
	return (
		<InView onChange={setInView} threshold={0.8}>
			{({ ref }) => (
				<div
					{...props}
					id={name}
					className={cn('scroll-mt-16', className)}
					ref={ref}>
					{children}
				</div>
			)}
		</InView>
	)
}

export default SectionsObserver
