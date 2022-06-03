import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import SIgnUpModal from './components/SIgnUpModal';

function App() {
    return (
        <>
            <Navbar />
            <SIgnUpModal />
            <Routes>
                <Route
                    path='/'
                    element={<Home />} />


            </Routes>
        </>);
}

export default App;
