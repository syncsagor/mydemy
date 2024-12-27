import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Courses></Courses>
    </div>
  );
}

export default App;
