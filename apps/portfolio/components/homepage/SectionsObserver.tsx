'use client'
import { useSetAtom } from 'jotai'
import { InView } from 'react-intersection-observer'

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
		<InView onChange={setInView}>
			{({ ref }) => (
				<div {...props} id={name} ref={ref}>
					{children}
				</div>
			)}
		</InView>
	)
}

export default SectionsObserver
