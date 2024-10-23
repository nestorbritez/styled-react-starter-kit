import { fireEvent, render, screen, within } from '@testing-library/react'

import App from './App.tsx'

beforeEach(() => {
  render(<App />)
})

it('renders semantic HTML', () => {
  expect(screen.getByRole('main')).toBeInTheDocument()

  const article = screen.getByRole('article')
  const title = within(article).getByRole('heading', {
    name: 'Vite + React & Tailwind',
  })

  expect(title.tagName).toBe('H1')
  expect(title).toBeInTheDocument()
})

test('button counter', () => {
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('Button counter (0)')
  fireEvent.click(button)
  expect(button).toHaveTextContent('Button counter (1)')
})
