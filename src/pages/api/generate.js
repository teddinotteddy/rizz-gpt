import { Configuration, OpenAIApi } from 'openai'

export default async function handler(req, res) {
    const configuration = new Configuration({
        organization: "org-wZkT82T0KXT4p0qtRUEAzJwR",
        apiKey: process.env.TOKEN
    })
    const openai = new OpenAIApi(configuration)

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Make a unique and catchy pickup line.",
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    
        const pickupLine = response.data.choices[0].text

        res.status(200).json({ line: pickupLine })
    } catch (error) {
        console.log(error)
    }
}
