PromptChef
A lightweight React app that turns your random leftover ingredients into a complete meal. Just type in at least four ingredients you have on hand, and the app instantly generates an easy-to-follow, beautifully formatted recipe.

No ads or long food blogs—just you, your ingredients, and instant meal ideas.

Built With
React: Utilizes functional components and React state management to handle dynamic user inputs, loading screens, and UI updates seamlessly.

Groq API: Powers the AI generation with lightning-fast inference, returning complete recipes in a fraction of a second.

React-Markdown: Safely parses the raw AI output into clean HTML headings, lists, and paragraphs.

Vite: For a fast and optimized frontend build environment.

How It Works
Enter a minimum of 4 ingredients you currently have in your kitchen.

Submit the form.

PromptChef pings the Groq API and returns a beautifully structured markdown recipe tailored to your pantry.

Run It Locally
1. Clone the repository:

Bash
git clone https://github.com/TariqSami1/PromptChef.git
cd PromptChef

2. Install dependencies:

Bash
npm install
3.Set up your environment variables:
Create a .env file in the root directory and add your free Groq API key:

Code snippet
VITE_GROQ_API_KEY=gsk_your_api_key_here

4.Start the development server:

Bash
npm run dev
