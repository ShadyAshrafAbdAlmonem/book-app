import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FirstComponent from './firstComponent';
import LoginComponent from './logInComponent';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeComponent from './home';
import BookSavedComponent from './bookSavedComponent';
import ReadBookComponent from './readbookcomponent';
import BuyComponent from "./buyComponent";
import VisaPaymentComponent from "./VisaPaymentComponent";
import MasterCardPaymentComponent from "./MasterCardPaymentComponent";
import VodafonePaymentComponent from "./VodafonePaymentComponent";
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/booksaved" element={<BookSavedComponent />} />
          <Route path="/readbook" element={<ReadBookComponent />} />
          <Route path="/buy" element={<BuyComponent />} />
          <Route path="/visa-payment" element={<VisaPaymentComponent />} />
          <Route path="/mastercard-payment" element={<MasterCardPaymentComponent />} />
          <Route path="/vodafone-payment" element={<VodafonePaymentComponent />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
