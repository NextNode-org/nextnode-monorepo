import { MotionDiv } from '@repo/ui'

import ReactObserver from '@/components/ReactObserver'

const Hero = (): JSX.Element => (
	<ReactObserver name="Hero">
		<MotionDiv className="h-screen">Hero</MotionDiv>
	</ReactObserver>
)

export default Hero
