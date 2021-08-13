import { useState } from 'react'
import tw from 'tailwind-styled-components'

import logo from './images/favicon.svg'

const Container = tw.div`
  max-w-lg h-screen
  flex flex-col items-center justify-center space-y-5
  m-auto
  text-center
`

const Logo = tw.img`
  max-w-xs
`

const Button = tw.button`
  bg-purple-500
  py-2 px-4
  rounded
`

const Counter = tw.span`
  ml-5 p-3
  bg-pink-600
  rounded-full
`

const Code = tw.code`
  py-1 px-2 mx-2
  bg-yellow-400
  text-black
  rounded
`

const Link = tw.a`
  border-b border-purple-400
  mx-2
`

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <p>Hello Vite React App with Styled Taildwind!</p>
      <p>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          Counter state is →
        </Button>
        <Counter>{count}</Counter>
      </p>
      <p>
        Edit <Code>App.tsx</Code> and save to test HMR updates.
      </p>
      <p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
        {' | '}
        <Link
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </Link>{' '}
        {' | '}
        <Link
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCSS Docs
        </Link>
      </p>
    </Container>
  )
}

export default App
