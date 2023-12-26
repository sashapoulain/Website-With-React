import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Swiperslider from './components/Swiperslider';
import Bannercard from './components/Bannercard';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Swiperslider></Swiperslider>
     <Bannercard></Bannercard>
     <Aboutus></Aboutus>
 
      {/* <ArrowRight color="royalblue" size={96} /> */}
     
    </div>
  );
}

export default App;
