import './App.css'

import reactLogo from '@assets/react.svg'
import twLogo from '@assets/tailwindcss.svg'
import { useState } from 'react'
import tw from 'tailwind-styled-components'

import viteLogo from '/vite.svg'

const Flex = tw.div`flex flex-col gap-6 items-center justify-center`

const Wrapper = tw.section`m-auto max-w-lg text-center space-y-12`
const Card = tw(Flex)``
const Button = tw.button`bg-purple-600 py-2 px-4 rounded`
const Code = tw.code`py-1 px-2 mx-2 bg-yellow-400 text-black rounded`

const Title = tw.h1`text-5xl font-bold`
const Logos = tw(Flex)`lg:flex-row`
const Logo = tw.img`max-w-[150px] max-h-[150px]`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper $as="section">
      <Logos>
        <Logo
          src={viteLogo}
          alt="logo"
          width="320"
          height="315"
          className="animate-bounce"
        />
        <Logo
          src={reactLogo}
          alt="logo"
          width="320"
          height="315"
          className="animate-spin"
        />
        <Logo
          src={twLogo}
          alt="logo"
          width="220"
          height="115"
          className="animate-pulse"
        />
      </Logos>

      <Card $as="article">
        <Title>
          Vite + React <Title $as="em">& Tailwind</Title>
        </Title>
      </Card>

      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          Button counter ({count})
        </Button>
        <p>
          Edit <Code>src/App.tsx</Code>
        </p>
      </Card>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Wrapper>
  )
}

export default App
