import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section from "./sections/Section/index.js"
import './styles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section />
  </StrictMode>,
)
