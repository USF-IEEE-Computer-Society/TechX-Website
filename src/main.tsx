import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { PostHogProvider } from 'posthog-js/react'

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

// Debug logging (remove after fixing)
console.log('PostHog Config:', {
  key: posthogKey ? `${posthogKey.substring(0, 10)}...` : 'MISSING',
  host: posthogHost || 'MISSING',
})

const options = {
  api_host: posthogHost,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {posthogKey ? (
      <PostHogProvider apiKey={posthogKey} options={options}>
        <App />
      </PostHogProvider>
    ) : (
      <>
        {console.error('PostHog API key is missing! Analytics will not work.')}
        <App />
      </>
    )}
  </StrictMode>
)
