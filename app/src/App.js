import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { UserRedirect } from "./routers/UserRedirect";
import { UserProvider } from "./firebase/UserProvider";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./firebase/config";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-gray-800 text-gray-200 min-h-screen p-8 font-sans-serif text-lg">
          <Header />
          <Switch>
            <UserRedirect exact path="/signup" component={SignUp} />
            <UserRedirect exact path="/signin" component={SignIn} />
            <Route exact path="/">
              <Redirect to="/signin" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
