import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {

  return (
    <>
     <Header />
      <main className="bg-light p-4">
        <Outlet />
      </main>
     <Footer />
    </>
  );
}

export default App
