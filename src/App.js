import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROUTER from './router/index.router';
const router = createBrowserRouter(ROUTER)

function App() {
  return (
    <div className="App" >
      <RouterProvider router={router} />
    
    </div>

  );
}

export default App;

