import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import EditorPage from './pages/EditorPage.jsx'
import QuotesPage from './pages/QuotesPage.jsx'
import { EditorProvider } from './context/EditorContext.jsx'
// Client skin: loaded last so it overrides the shared template styles
import './omoda-ui.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App hideEditButton={true} />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </BrowserRouter>
    </EditorProvider>
  </StrictMode>,
)
