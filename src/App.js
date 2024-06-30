import logo from './logo.svg';
import './App.css';
import qrCode from './images/image-qr-code.png'
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/700.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <img src = {qrCode} alt="qrCode" className='qrCode'/>
          <h1 className='header'> Improve your front-end skills by building projects</h1>
          <p className='body'>Scan the QR code to visit FrontEnd Mentor and take your coding skills to next level</p>
        </div>
      </header>
    </div>
  );
}

export default App;
