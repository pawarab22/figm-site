import './App.css';
import Header from './Header';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Safeschool from './components/Safeschool';
import Schooltool from './components/Schooltool';
import Whatsdue from './components/Whatsdue';
import Whatsnew from './components/Whatsnew';

function App() {
  return (
    <div className=''>
     <Header/>
     <Homepage/>
     <Whatsdue/>
     <Whatsnew/>
     <Certifications/>
     <Schooltool/>
     <Safeschool/>
     <Footer />
    </div>
  );
}

export default App;
