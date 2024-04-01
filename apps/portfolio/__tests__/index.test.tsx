import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Home from '../app/page'

describe('Home', () => {
	it('renders the page', () => {
		render(<Home />)

		const heroSection = screen.getByText('Hero')

		expect(heroSection).toBeInTheDocument()
	})
})
