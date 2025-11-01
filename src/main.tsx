import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { Provider } from './components/ui/provider.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
