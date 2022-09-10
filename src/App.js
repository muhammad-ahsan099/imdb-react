import './App.css';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navigation from './navigation/Navigation';
import ScrollToTop from './navigation/ScrollToTop';

function App() {
  const history = createBrowserHistory({ window });

  return (
    <div className="App" style={{ backgroundColor: '#000', paddingBottom: 10 }}>
      <HistoryRouter history={history}>
        <ScrollToTop />
        <Navigation />
      </HistoryRouter>
    </div>
  );
}

export default App;
