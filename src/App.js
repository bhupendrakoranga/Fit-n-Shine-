import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //NavLink,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SignInUp from './Components/SignInUp/SignInUp';
//import OTPPage from './Components/OTP/OTP';
import Home from './pages/Home';
import CenterDetialsPage from './pages/CenterDetials';
import CategoryPage from './pages/Category';
import StaffPage from './pages/SelectStaff';
import Contact from './pages/Contact';
import CheckOutPage from './pages/CheckOut';
import PaymentPage from './pages/SelectPayment';
import PaymentFailedPage from './pages/PaymentFailed';
import BookingPage from './pages/BookingConfirmed';
import BookingOngoingPage from './pages/BookingOngoing';
import BookingOngoingTwoPage from './pages/BookingOngoingTwo';
import AvailableMembershipPage from './pages/AvailableMembership';
import MyMembershipPage from './pages/MyMembership';
import ProfilePage from './pages/Profile';
import Error from './pages/Error';
import OTP from './Components/OTP/OTP';
import Location from './Components/Location/Location';
import ResetPassword from './Components/ResetPassword/resetPassword';
import EditProfile from './Components/EditProfile/EditProfile';
import './App.css';
import StaffTwo from './Components/StaffTwo/StaffTwo';
function App() {
  //const port = process.env.PORT || 8000;
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" render={() => <SignInUp name="signInUp" />} />
          <Route
            exact
            path="/center-details/:id"
            render={() => <CenterDetialsPage name="CenterDetialsPage" />}
          />
          <Route
            exact
            path="/category/:id/:postCode"
            render={() => <CategoryPage name="category" />}
          />
          <Route
            exact
            path="/staff/:id"
            render={() => <StaffPage name="staff" />}
          />
          <Route
            exact
            path="/staffTwo/:id"
            render={() => <StaffTwo name="StaffTwo" />}
          />
          <Route
            exact
            path="/checkout"
            render={() => <CheckOutPage name="checkout" />}
          />
          <Route
            exact
            path="/payment"
            render={() => <PaymentPage name="payment" />}
          />
          <Route
            exact
            path="/failed"
            render={() => <PaymentFailedPage name="failed" />}
          />
          <Route
            exact
            path="/booking"
            render={() => <BookingPage name="Booking" />}
          />
          <Route
            exact
            path="/ongoing"
            render={() => <BookingOngoingPage name="Booking-ongoing" />}
          />
          <Route
            exact
            path="/ongoing-two"
            render={() => <BookingOngoingTwoPage name="Booking-ongoing-two" />}
          />
          <Route
            exact
            path="/available/:id"
            render={() => (
              <AvailableMembershipPage name="Available-Membership" />
            )}
          />
          <Route
            exact
            path="/membership"
            render={() => <MyMembershipPage name="My-Membership" />}
          />
          <Route
            exact
            path="/profile"
            render={() => <ProfilePage name="Profile" />}
          />
          <Route exact path="/otp" render={() => <OTP name="OTP" />} />
          <Route
            exact
            path="/location"
            render={() => <Location name="Location" />}
          />
          <Route
            exact
            path="/reset-password"
            render={() => <ResetPassword name="ResetPassword" />}
          />
          <Route
            exact
            path="/edit-profile"
            render={() => <EditProfile name="EditProfile" />}
          />
          <Route
            exact
            path="/contact/:fname/:lname/"
            render={() => <Contact name="Contact" />}
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
