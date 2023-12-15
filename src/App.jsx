import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {

  return (
    <>
     <Header />
      <main className="bg-light p-sm-1 pb-3">
        <Outlet />
      </main>
     <Footer />
    </>
  );
}

export default App
