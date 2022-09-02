import './App.css';
import DrawerComponent from './common/drawer/Drawer';
import Footer from './common/footer/Footer';
import Landing from './modules/landingPage/Landing';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000000' }}>
      <DrawerComponent />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
