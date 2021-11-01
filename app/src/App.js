import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { UserRoute } from "./routers/UserRoute";
import { AuthenticatedRoute } from "./routers/AuthenticatedRoute";
import { UserProvider } from "./firebase/UserProvider";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./firebase/config";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-gray-800 text-gray-200 min-h-screen p-8 font-sans-serif text-lg">
          <Header />
          <Switch>
            <UserRoute exact path="/signup" component={SignUp} />
            <UserRoute exact path="/login" component={SignIn} />
            <AuthenticatedRoute exact path="/profile/:id" component={Profile} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
