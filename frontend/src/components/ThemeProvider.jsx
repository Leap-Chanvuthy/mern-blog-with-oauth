import { useSelector } from "react-redux";

const ThemeProvider = ({children}) => {
    const {theme} = useSelector(state => state.theme);
    
    return ( 
        <div className={theme}>
            <div className="bg-white text-gray-800 dark:text-gray-200 dark:bg-gray-900">
                {children}
            </div>
        </div>
     );
}
 
export default ThemeProvider;