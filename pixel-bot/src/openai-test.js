import OpenAI from "openai";

const openai = new OpenAI({apikey:"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"});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();