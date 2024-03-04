import './App.css';
import Home from './Home'
import Header from './Header';
import Footer from './Footer';

function App() {
  
  return (
    <div>
    <div className="App">
      <Header/>
      <div className='responsive'>
      <Home/>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
