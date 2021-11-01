import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import "./firebase/config";

function App() {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen p-8 font-sans-serif text-lg">
      <Header />
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </div>
  );
}

export default App;
