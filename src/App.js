import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/About Us/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Medicine from './Components/Medicine/Medicine';
import MedicineId from './Components/MedicineDetails/MedicineId';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';
import AuthProvider from './Components/Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/aboutus">
                <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/medicine">
                <Medicine></Medicine>
            </PrivateRoute>
            <PrivateRoute path="/details/:medicineId">
                <MedicineId></MedicineId>
            </PrivateRoute>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
