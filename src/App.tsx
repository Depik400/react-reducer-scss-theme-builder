import { useSelector } from "react-redux";
import { store } from "./store";
import Theme from "./useTheme/useTheme";


export default function App() {
  const useThemeSelector = useSelector.withTypes<{theme: {theme: 'dark' | 'light'}}>()
  const theme = useThemeSelector((state) => state.theme.theme)
  return <div>
    <div>{theme}</div>
    <Theme></Theme>
  </div>
}