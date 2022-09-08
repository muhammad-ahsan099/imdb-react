import './App.css';
import CreateAccount from './auth/createAccount/CreateAccount';
import SignIn from './auth/signIn/SignIn';
import SignInGoogle from './auth/signInGoogle/SignInGoogle';
import BornToday from './common/bornToday/BornToday';
import ComingSoon from './common/comingSoon/ComingSoon';
import DrawerComponent from './common/drawer/Drawer';
import Footer from './common/footer/Footer';
import DetailPage from './modules/detailPage/DetailPage';
import LandingPage from './modules/landingPage/LandingPage';
import RecentlyReviews from './common/recentlyReviews/RecentlyReviees';
import TrailersPage from './modules/trailersPage/TrailersPage';
import VideoPlayer from './modules/trailersPage/videoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000', paddingBottom:10 }}>
      <DrawerComponent />
      {/* <LandingPage /> */}
      {/* <DetailPage /> */}
      {/* <TrailersPage /> */}
      {/* <VideoPlayer /> */}
      {/* <RecentlyReviews /> */}
      {/* <Footer /> */}
    {/* <div className="App"> */}
      {/* <DrawerComponent />
      <WatchList />
      <MoreToWatch />
      <TopBoxOffice />
      <ComingSoon />
      <MoreToExplore />
      <BornToday />
      <TopNews />
      <Footer /> */}
      {/* <SignInGoogle /> */}
      {/* <CreateAccount /> */}
      <SignIn />
    </div>
  );
}

export default App;
