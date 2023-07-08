import { RouterProvider } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { router } from './routes/routing'
import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
