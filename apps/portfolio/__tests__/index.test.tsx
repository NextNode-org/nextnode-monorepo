import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
	it('renders the page', () => {
		render(<Home />)

		const getStarted = screen.getByText('Get started by editing')

		expect(getStarted).toBeInTheDocument()
	})
})
