import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routes} from './Routes/routes'

function App() {
  return (
    <div data-theme="synthwave">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
