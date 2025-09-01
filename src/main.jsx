import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


// Initialize theme from localStorage
(function initTheme(){
const stored = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (stored === 'dark' || (!stored && prefersDark)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}
})()


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)