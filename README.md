
# Black Code Editor

This project is a simple web-based code editor built with **React** and **Vite**, using:

- [Chakra UI](https://chakra-ui.com/) for UI components
- [Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react) for code editing
- [Piston API](https://github.com/engineer-man/piston) for code execution across multiple languages

## 🌐 Supported Languages

The following languages and versions are supported via Piston API:

```js
const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};
```

## 🚀 Features

- Code editor with syntax highlighting powered by Monaco Editor
- Language selector dropdown to switch between languages
- Execute code snippets using the Piston API and display output
- Light/Dark theme toggle using Chakra UI's color mode support
- Loading and error feedback during code execution

## 🧱 Tech Stack

- **Frontend:** React + Vite
- **UI Components:** Chakra UI
- **Code Editor:** Monaco Editor React wrapper
- **Code Execution API:** Piston API (remote or self-hosted)

## 📦 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/black-code-editor.git
   cd black-code-editor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.