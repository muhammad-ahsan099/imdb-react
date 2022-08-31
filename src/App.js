import './App.css';
import BornToday from './common/bornToday/BornToday';
import ComingSoon from './common/comingSoon/ComingSoon';
import DrawerComponent from './common/drawer/Drawer';
import Footer from './common/footer/Footer';
import MoreToExplore from './common/moreToExplore/MoreToExplore';
import MoreToWatch from './common/moreToWatch/MoreToWatch';
import TopBoxOffice from './common/topBoxOffice/TopBoxOffice';
import TopNews from './common/topNews/TopNews';
import WatchList from './common/watchList/WatchList';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#000000'}}>
      <DrawerComponent />
      <WatchList />
      <MoreToWatch />
      <TopBoxOffice />
      <ComingSoon />
      <MoreToExplore />
      <BornToday />
      <TopNews />
      <Footer />
    </div>
  );
}

export default App;
