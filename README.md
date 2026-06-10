<div align="center">

# 📝 React Sticky Notes App

**A modern, responsive, and feature-rich Sticky Notes application built with React.js**

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-4CAF50?style=for-the-badge)](https://react-notes-app-wheat-two.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/📂%20GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/AhmedDevx07/React-Notes-App)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 🌟 Overview

React Sticky Notes App is a clean and intuitive note-taking application that lets users quickly capture and manage short reminders. Notes are saved in the browser's **Local Storage**, ensuring they persist even after closing or refreshing the page. The app also features a **Voice-to-Text** input for a hands-free, accessible experience — all wrapped in a beautiful **Masonry Grid** layout.

This project was built as part of an internship task at **[internee.pk](https://internee.pk)**, focusing on core React concepts, browser APIs, and modern UI/UX practices.

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ **Add Notes** | Instantly create new sticky notes with a single click |
| 🗑️ **Delete Notes** | Remove any note easily with a delete button |
| 💾 **Local Storage** | Notes persist across sessions using browser localStorage |
| 🎤 **Voice-to-Text** | Create notes hands-free using the Web Speech API |
| 📱 **Responsive Design** | Fully responsive across all screen sizes |
| 🧱 **Masonry Grid Layout** | Dynamic, Pinterest-style card layout |
| 🎨 **CSS Animations** | Smooth transitions and interactions for a polished UI |

---

## 🖥️ Live Preview

> 🔗 **[https://react-notes-app-wheat-two.vercel.app/](https://react-notes-app-wheat-two.vercel.app/)**

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | React.js (with Hooks) |
| **Build Tool** | Vite |
| **Styling** | CSS3 with Animations |
| **Data Persistence** | Browser LocalStorage API |
| **Voice Input** | Web Speech API (SpeechRecognition) |
| **Deployment** | Vercel |

---

## 📚 Concepts Learned & Implemented

### ⚛️ React
- `useState` and `useEffect` hooks for state management
- Component-based architecture
- Props drilling and event handling
- Conditional rendering

### 🌐 Browser APIs
- `localStorage.getItem / setItem` for persistent data
- `SpeechRecognition` API for voice input

### 🎨 UI/UX
- Masonry Grid using CSS columns
- CSS keyframe animations for note entry/exit
- Mobile-first responsive design

---

## 🎯 Challenge Feature — Voice-to-Text

One of the standout features of this app is **hands-free note creation** via the browser's built-in **Web Speech API**.

- 🎙️ Click the microphone button to start listening
- 🗣️ Speak your note aloud
- ✅ The transcribed text is automatically filled into the note input

> **Note:** Voice-to-Text works on Chrome and Edge browsers that support the `SpeechRecognition` API.

---

## 📁 Project Structure

```
React-Notes-App/
├── public/
├── src/
│   ├── components/
│   │   ├── NoteCard.jsx       # Individual note card component
│   │   ├── NoteForm.jsx      # Input field with voice button
│   ├── App.jsx                # Root component with state logic
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & animations
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AhmedDevx07/React-Notes-App.git

# 2. Navigate into the project directory
cd React-Notes-App

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

This project is deployed on **Vercel** with automatic CI/CD from the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AhmedDevx07/React-Notes-App)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Muhammad Ahmed (AhmedDevx07)**  
Frontend Developer | MERN Stack Learner

### 🌐 Connect With Me

* 🐙 GitHub: https://github.com/AhmedDevx07  
* 💼 LinkedIn: https://linkedin.com/in/ahmeddevx07  
* 🌐 Portfolio: https://ahmeddevx07.vercel.app/

---

<div align="center">
  <p>Made with ❤️ as part of the <strong>internee.pk React Internship</strong></p>
</div>
