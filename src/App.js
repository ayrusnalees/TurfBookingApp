import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AvailableGames from './pages/AvailableGames';
import Location from './pages/Location';
import Review from './pages/Review';
import Contact from './pages/Contact';
import BookCricket from './pages/BookCricket';
import BookFootball from './pages/BookFootball';
import BookBadminton from './pages/BookBadminton';
import CricketGrounds from './pages/CricketGrounds';
import FootballGrounds from './pages/FootballGrounds';
import BadmintonGrounds from './pages/BadmintonGrounds';
import Navbar from './components/Navbar';
import FacilitiesPage from './components/FacilitiesPage';
import HomePage from './components/HomePage';
import GetListedPage from './components/GetListedPage';
import AboutUs from './components/AboutUs';
 // Add this import if needed

const theme = createTheme();

const Layout = ({ children }) => {
  const location = useLocation();

  // Determine if Navbar should be shown
  const shouldShowNavbar = !['/', '/homepage','/signup','/signin','/about'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/getlisted" element={<GetListedPage />} />
            <Route path='/about' element={<AboutUs/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/available-games" element={<AvailableGames />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-cricket" element={<BookCricket />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/book-football" element={<BookFootball />} />
            <Route path="/book-badminton" element={<BookBadminton />} />
            <Route path="/select-cricket-ground" element={<CricketGrounds />} />
            <Route path="/select-football-ground" element={<FootballGrounds />} />
            <Route path="/select-badminton-ground" element={<BadmintonGrounds />} />
            {/* Add BookingPage route */}
            {/* <Route path="/booking" element={<BookingPage />} /> */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
