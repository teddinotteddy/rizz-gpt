import React, { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [pickupLine, setPickupLine] = useState("")

  const generateLine = async() => {
    const response = await fetch("/api/generate", {
      method: "GET"
    })

    const res = await response.json()
    
    setPickupLine(res.line)
}

  return (
    <div>
      <Head>
        <title>Rizz-GPT</title>
        <meta name="description" content="Generate W pickup lines." />
        <meta name="viewport" content="width=device-width, initial-sca  le=1" />
      </Head>
      <main>
        <h1>Rizz-GPT</h1>
        <p>Do you have L rizz? Don't panic, Rizz-GPT is here! Generate W pickup lines that will help you rizz up whoever!</p>
        <p>(Use at your own risk. Rizz-GPT is not liable for any heartbreaks, friendzones, or breakups.)
        <p>{pickupLine}</p>
        <button onClick={generateLine}>Generate</button>
      </main>
    </div>
  )
}
