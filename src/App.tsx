import Hat from "./components/hat/Hat/Hat"
import Banner from "./components/main/Banner/Banner"
import { ThemeProvider } from "./modules/theme/contexts/theme-provider"

function App() {
  
  return (
    <ThemeProvider>
      <Hat/>
      <Banner/>
    </ThemeProvider>
  )
}

export default App
