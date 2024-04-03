interface ReturnType {
	observe: () => void
	unobserve: () => void
	disconnect: () => void
}

const intersectionObserverMock = (): ReturnType => ({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
})

window.IntersectionObserver = jest
	.fn()
	.mockImplementation(intersectionObserverMock)
