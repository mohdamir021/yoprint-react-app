import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import Providers from "./Providers.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
