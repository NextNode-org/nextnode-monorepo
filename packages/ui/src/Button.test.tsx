import '@testing-library/jest-dom'
import { screen, cleanup, render } from '@testing-library/react'

import { Button } from './Button'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('Button shows', () => {
	render(<Button> Hey </Button>)

	expect(screen.getByRole('button')).toHaveTextContent('Hey')
})
