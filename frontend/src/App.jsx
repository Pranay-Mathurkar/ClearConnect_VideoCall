import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/landing';
import Authentication from '../src/pages/VideoMeet';
import { AuthProvider } from '../src/contexts/AuthContext';
import VideoMeetComponent from '../src/pages/home';
import HomeComponent from '../src/pages/home';
import History from '../src/pages/history';

function App() {
  return (
    <div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />

            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;