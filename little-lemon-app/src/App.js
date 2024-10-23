import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Nav className="nav"/>
      <Main className="main"/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
