import './App.css';
import Layout from './components/Layout';
import Home from './views/Home';
import {Route, BrowserRouter as Router, Routes} from 'react-router';
import Upload from './views/Upload';
import Profile from './views/profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
