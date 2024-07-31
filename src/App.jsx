import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollRestoration, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Outlet/>
      {/* <LandingPage/> */}
      <ScrollRestoration/>
    </>
  )
}

export default App