
import { RouterProvider } from 'react-router-dom';
import './App.css';
 
import Route from './Router/Route';
 

function App() {
  return (
    <div className="App">
      <RouterProvider router={Route}>

      </RouterProvider>
       
    </div>
  );
}

export default App;
