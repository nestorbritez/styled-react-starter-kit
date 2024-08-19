import './App.css'

import reactLogo from '@assets/react.svg'
import twLogo from '@assets/tailwindcss.svg'
import { useState } from 'react'
import tw from 'tailwind-styled-components'

import viteLogo from '/vite.svg'

const Flex = tw.div`flex flex-col items-center justify-center gap-6`

const Wrapper = tw.section`m-auto max-w-lg space-y-12 text-center`
const Card = tw(Flex)``
const Button = tw.button`rounded bg-purple-600 px-4 py-2`
const Code = tw.code`mx-2 rounded bg-yellow-400 px-2 py-1 text-black`

const Title = tw.h1`text-5xl font-bold`
const Logos = tw(Flex)`lg:flex-row`
const Logo = tw.img`max-h-[150px] max-w-[150px]`

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

      <p>Click on the Vite and React logos to learn more</p>
    </Wrapper>
  )
}

export default App
