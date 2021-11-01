import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { UserProvider } from "./firebase/UserProvider";
import { UserRedirect } from "./routers/UserRedirect";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import "./firebase/config";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-gray-800 text-gray-200 min-h-screen p-8 font-sans-serif text-lg">
          <Header />
          <Switch>
            <UserRedirect exact path="/signup" component={Signup} />
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
