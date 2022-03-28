import './App.css';
import { useState } from 'react';
import ViewInfo from './questions/que1/ViewInfo';
import IncrementDialog from './questions/que2/Increment5';
import Dashboard from './questions/que3/Dashboard';
import MenuBar from './MenuBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SplashPage from './SplashPage';
import Portfolio from './questions/que4/Portfolio';
import LoginPage from './LoginPage';
import SalesVisualization from './questions/que8 and 10/ApiCall';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app-container">
      {isAuth ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                isAuth ? (
                  <SplashPage />
                ) : (
                  <LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />
                )
              }
            />
            <Route
              path="/login"
              element={<LoginPage setIsAuth={setIsAuth} isAuth={isAuth} />}
            />
            <Route
              path="/que1"
              element={
                <>
                  <MenuBar />
                  <ViewInfo
                    name="abcde"
                    email="abcde@gmail.com"
                    phoneno="9841234656"
                  />
                </>
              }
            />
            <Route
              path="/que2"
              element={
                <>
                  <MenuBar />
                  <IncrementDialog />
                </>
              }
            />
            <Route
              path="/que3"
              element={
                <>
                  <MenuBar />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/que4"
              element={
                <>
                  <MenuBar />
                  <Portfolio />
                </>
              }
            />
            <Route
              path="/que810"
              element={
                <>
                  <MenuBar />
                  <SalesVisualization />
                </>
              }
            />
          </Routes>
        </Router>
      ) : (
        <LoginPage setIsAuth={setIsAuth} isAuth={isAuth} />
      )}
    </div>
  );
}

export default App;
