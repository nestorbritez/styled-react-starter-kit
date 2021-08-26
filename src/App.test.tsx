import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  /**
   * HTML Container
   */
  test('is rendering the main container', () => {
    const target = screen.getByRole('main')

    expect(target).toBeInTheDocument()
  })

  /**
   * Styles
   */
  test('is applying tailwind class names to the main container', () => {
    const target = screen.getByRole('main')

    ;[
      'max-w-lg',
      'h-screen',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'space-y-5',
      'm-auto',
      'text-center',
    ].forEach((className) => expect(target).toHaveClass(className))
  })

  /**
   * Logo
   */
  test('is rendering the image logo with attributes', () => {
    const logo = screen.getByRole('img', { name: 'logo' })

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/images/favicon.svg')
    expect(logo).toHaveAttribute('width', '320')
    expect(logo).toHaveAttribute('height', '315')
  })

  /**
   * Paragraph
   */
  test('is rendering some intro', () => {
    const target = screen.getByText(/Hello Vite/)
    expect(target).toBeInTheDocument()
  })

  /**
   * Button
   */
  test('has a functional button', () => {
    const target = screen.getByRole('button')

    expect(target).toHaveTextContent('Counter state is →')

    fireEvent.click(target)
    expect(screen.getByTestId('counter')).toHaveTextContent('1')

    fireEvent.click(target)
    expect(screen.getByTestId('counter')).toHaveTextContent('2')
  })

  /**
   * Links
   */
  test('links has the correct reference and open correctly', () => {
    new Map([
      [/Learn React/, 'https://reactjs.org'],
      [/Vite Docs/, 'https://vitejs.dev/guide/features.html'],
      [/Tailwind Docs/, 'https://tailwindcss.com/docs'],
    ]).forEach((href, name) => {
      const anchor = screen.getByRole('link', { name })

      expect(anchor).toHaveAttribute('href', href)
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
