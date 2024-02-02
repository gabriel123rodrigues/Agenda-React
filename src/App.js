import RoutesApp from './Routes';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './globalStyles.js';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RoutesApp />
                    <GlobalStyles />
                    <ToastContainer autoClose={5000} className="toast-container" />
                </PersistGate>
            </Provider>
        </>
    )
}

export default App;
