import Header from "./components/header/Header";
import Home from "./components/Gotomenu/Home";
import Modal from "./components/modal/Modal";
import "./App.css";
import Card from "./components/card/Card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/thanku" element={<Modal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
