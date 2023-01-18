import './App.scss';
import landing from './images/landing-img.jpg';
import logo from './images/logo.png';

function App() {
  return (
    <div className="landing">

      <div className="landing-image-section">
        <img className="landing-image" src={ landing } alt="Colorful Pile of books" />
      </div>
      
      <div className="landing-information">
        <img className="logo" src={ logo } alt="BookHostel logo"/>
        <input className="landing-button" type="button" value="Start" />
      </div>
    </div>
  );
}

export default App;
