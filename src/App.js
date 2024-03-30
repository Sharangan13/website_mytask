import './App.css';
import Delivering from './Delivering';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Wealth from './Wealth';
import WealthConnect from './WealthConnect';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Wealth/>
      <Page3/>
      <Page4/>
      <Page5/>
      {/* <Delivering/> */}
      <WealthConnect/>
      <Footer/>
    </div>
  );
}

export default App;
