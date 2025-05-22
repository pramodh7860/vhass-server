import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import AuthSuccess from "./pages/auth/AuthSuccess";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Land from "./pages/land/land";
import WorkshopsPage from "./pages/workshop/workshop";
import Entrepreneur from "./pages/entrepreneur/entrepreneur";
import Contacts from "./pages/contacts/contacts";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashboard from "./pages/dashboard/Dashboard";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import AdminDashboard from "./admin/Dashboard/AdminDashboard";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminWorkshops from "./admin/Workshops/AdminWorkshops";
import WorkshopDescription from "./pages/workshopdescription/WorkshopDescription";
import WorkshopDetails from "./pages/workshopdetails/WorkshopDetails";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";

const AppContent = () => {
  const { isAuth, user, loading } = UserData();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header isAuth={isAuth} isLanding={isLandingPage} />
          <Routes>
            <Route path="/" element={<Land />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshop" element={<WorkshopsPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/entrepreneur" element={<Entrepreneur />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route path="/auth-success" element={<AuthSuccess />} />
            <Route
              path="/forgot"
              element={isAuth ? <Home /> : <ForgotPassword />}
            />
            <Route
              path="/reset-password/:token"
              element={isAuth ? <Home /> : <ResetPassword />}
            />
            <Route
              path="/course/:id"
              element={<CourseDescription />}
            />
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user} /> : <Login />}
            />
            <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
            <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />
            <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashboard user={user} /> : <Login />}
            />
            <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUsers user={user} /> : <Login />}
            />
            <Route
              path="/admin/workshop"
              element={isAuth ? <AdminWorkshops user={user} /> : <Login />}
            />
            <Route
              path="/workshop/:id"
              element={<WorkshopDescription />}
            />
            <Route
              path="/workshop/details/:id"
              element={isAuth ? <WorkshopDetails user={user} /> : <Login />}
            />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Refund-policy" element={<RefundPolicy />} />
          </Routes>
          {!isLandingPage && <Footer />}
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
