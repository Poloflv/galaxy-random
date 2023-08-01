import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quotes from "./db/quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'


const listBg = ["bg1","bg2","bg3","bg4"]
const listBgPlanetas = ["/espacio/bgp1.svg","/espacio/bgp2.svg","/espacio/bgp3.svg","/espacio/bgp4.svg"]

function App() {
  // console.log(getRandom(quotes))

  const [quote, setQuote] = useState(getRandom(quotes));
  const [currentBg, setCurrentBg] = useState(getRandom(listBg))
  const [currentBgp, setCurrentBgp] = useState(getRandom(listBgPlanetas))

  const handleChangeQuote = () => {
    setQuote(getRandom(quotes))
    setCurrentBg(getRandom(listBg))

    setCurrentBgp(getRandom(listBgPlanetas))
  }

  return (
    <main className={`App ${currentBg} `}>
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} currentBgp={`${currentBgp}`} />
    </main>
  )
}

export default App
