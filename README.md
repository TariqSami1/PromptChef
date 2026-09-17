# PromptChef

A lightweight React app that turns your random leftover ingredients into a complete meal. Just type in at least four ingredients you have on hand, and the app instantly generates an easy-to-follow, beautifully formatted recipe.

No ads or long food blogs — just you, your ingredients, and instant meal ideas.

---

## How It Works

1. Enter a minimum of 4 ingredients you currently have in your kitchen.
2. Submit the form.
3. PromptChef pings the Groq API and returns a beautifully structured markdown recipe tailored to your pantry.

---

## Built With

- **React** — Utilizes functional components and React state management to handle dynamic user inputs, loading screens, and UI updates seamlessly.
- **Groq API** — Powers the AI generation with lightning-fast inference, returning complete recipes in a fraction of a second.
- **React-Markdown** — Safely parses the raw AI output into clean HTML headings, lists, and paragraphs.
- **Vite** — For a fast and optimized frontend build environment.

---

## Run It Locally

**1. Clone the repository**

```bash
git clone https://github.com/TariqSami1/PromptChef.git
cd PromptChef
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up your environment variables**

Create a `.env` file in the root directory and add your free Groq API key:

```
VITE_GROQ_API_KEY=gsk_your_api_key_here
```

**4. Start the development server**

```bash
npm run dev
```

The app should now be running locally — open the URL shown in your terminal (typically `http://localhost:5173`) to try it out.

---

## 📋 Requirements

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A free [Groq API key](https://console.groq.com/keys)

---


## 💡 Acknowledgments

- Thanks to [Groq](https://groq.com/) for providing fast, free-tier AI inference.
