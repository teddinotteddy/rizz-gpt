import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import Head from 'next/head'

const configuration = new Configuration({
  apiKey: "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"
})
const openai = new OpenAIApi(configuration)

export default function Home() {
  const [pickupLine, setPickupLine] = useState("")

  const generateLine = async() => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "generate a pickup line",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })

    setPickupLine(response.data.choices[0].text)
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
        <p>{pickupLine}</p>
        <button onClick={generateLine}>Generate</button>
      </main>
    </div>
  )
}
