import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Terminal from "./components/terminal/Terminal";
import Git from "./components/gitFolder/Git";
import Github from "./components/gitFolder/githubFolder/Github";
import Internet from "./components/internet/Internet"
import Python from "./components/python/Python"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/terminal" Component={Terminal} />
          <Route path="/git" Component={Git} />
          <Route path="/github" Component={Github} />
          <Route path="/internet" Component={Internet} />
          <Route path="/python" Component={Python} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
