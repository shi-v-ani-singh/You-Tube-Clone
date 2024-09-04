import Body from './components/Body';
import FeedContainer from './components/FeedContainer';
import Watch from './components/Watch';
import Navbar from './components/Navbar';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:'/',
        element: <FeedContainer />
      },
      {
        path:'/Watch',
        element: <Watch/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App h-screen">
     <Navbar/>
     <RouterProvider router = {appRouter}/>
     </div>
    
  );
}

export default App;
