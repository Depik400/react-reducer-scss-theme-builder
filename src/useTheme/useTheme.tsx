import { useSelector } from "react-redux";
import { store } from "../store";



function Theme() {
    const theme = useSelector((state) => state.theme.theme)
    console.log(theme);
    return <button onClick={() => store.dispatch({type: 'setTheme', payload: theme === 'dark' ? 'light' : 'dark'})}>
        {theme}
    </button>
}

export default Theme;