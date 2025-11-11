import Hat from "./components/hat/Hat/Hat"
import Banner from "./components/main/Banner/Banner"
import { ThemeProvider } from "./modules/theme/contexts/theme-provider"
import { CounterProvider } from "./modules/counter/ui"

function App() {
  
  return (
    <ThemeProvider>
      <CounterProvider>
        <Hat/>
        <Banner/>
      </CounterProvider>
    </ThemeProvider>
  )
}

export default App
