import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <main>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/home" exact component={Home} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
