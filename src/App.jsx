import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import purpleBall from "./assets/img/purple_ball.svg";
import redBall from "./assets/img/red_ball.svg";

function App() {
  return (
    <div className="App">
      <div className="purple_light" />
      <img className="purple_ball" src={purpleBall} alt="purple ball" />
      <img className="red_ball" src={redBall} alt="red ball" />
      <div className="red_light" />
      <img className="red_ball-2" src={redBall} alt="red ball" />
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
