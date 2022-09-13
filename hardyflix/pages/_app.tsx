import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    // HOC : High Order Components
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
    //  <Component {...pageProps} />
}

export default MyApp
