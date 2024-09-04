import './App.css';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
// import Videos from './components/Videos';
import FeedContainer from './components/FeedContainer';


function App() {
  return (
    <div className="App h-screen">
     <Navbar/>
     <div className='flex mt-16'>
     <LeftSidebar/>
     <FeedContainer/>
     </div>

     </div>
    
  );
}

export default App;
