import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('Application starting...')

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

try {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
  console.log('Application rendered successfully')
} catch (error) {
  console.error('Error rendering application:', error)
}
