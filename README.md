# AI-Powered UI Components Generator

The AI-powered UI components generator web app enables developers to generate Next.js Tailwind CSS UI components with an implementation tutorial. 

The generator has an embedded code editor where users can modify the generated code and directly see the results. 

The web app leverages the power of Langchain and Tavily AI agents to do web searches in order to generate accurate and up-to-date code snippets and implementation tutorials.

Here are screenshots showing the web app in action.

## Generating Contact Form UI Component
![demo](https://github.com/TheGreatBonnie/AIPoweredUIComponentsGenerator/assets/40994473/b3f65a7e-a03c-4700-bec6-bbdece7016a7)

## Generating Contact Form UI Component Implementation Tutorial
![demo2](https://github.com/TheGreatBonnie/AIPoweredUIComponentsGenerator/assets/40994473/67b620f6-acf1-4ae8-b032-d85307fcc177)


## Getting Started

First, install the packages and dependencies.

```
npm install
```

Second, create a file named .env.local on your root directory. Then add your OpenAI and Tavily API keys to the file.

```
OPENAI_API_KEY="Your OpenAI API key"
TAVILY_API_KEY="Your Tavily API key"
```

To get the ChatGPT API key, navigate to https://platform.openai.com/api-keys.

![3](https://github.com/TheGreatBonnie/AIPoweredUIComponentsGenerator/assets/40994473/77212603-1212-4b26-830c-95b64c224b77)


To get the Tavily Search API key, navigate to https://app.tavily.com/home

![4](https://github.com/TheGreatBonnie/AIPoweredUIComponentsGenerator/assets/40994473/5f316ff4-17af-4ab6-b399-61baee06e8c9)


Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check out [this tutorial on DevTo](https://dev.to/the_greatbonnie/ai-powered-frontend-ui-components-generator-nextjs-gpt4-langchain-copilotkit-1hac) on how to build the UI Components Generator.
