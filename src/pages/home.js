// import logo from '../logo.svg';
import '../App.css';
import Navbar from '../component/navbar';
import Banner from '../component/banner';
import Nearchart from '../component/nearchart';
import RecentListing from '../component/recentlisting';
import Ourservice from '../component/ourservice';
import About from '../component/about';
import Patners from '../component/patners';
import Footer from '../component/footer';
import Testing2 from '../component/testing2';

function App() {
  return (

    <div className=''>
      <Navbar />
      <Banner />
      <Nearchart />
      <RecentListing />
      <Ourservice />
      <Testing2 />
      <About />
      <Patners />
      <Footer />
    </div>
  );
}

export default App;
