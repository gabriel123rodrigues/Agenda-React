import RoutesApp from './Routes';

import { ToastContainer } from 'react-toastify';
import  GlobalStyles from './globalStyles.js'
function App() {
    return(
        <>
        <RoutesApp/>
        <GlobalStyles/>
        <ToastContainer autoClose={5000} className="toast-container"/>
        </>
    )
}

export default App;
