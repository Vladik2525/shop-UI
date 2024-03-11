import Router from './router/router'
import './App.css'
import CopiedContextProvider from './contexts/copied-modal-provider'

const App = () => {

    return (
        <CopiedContextProvider><Router /></CopiedContextProvider>
    )

}

export default App
