import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import Campionati, {loader as campLoader} from './pages/Campionati';
import Squadre from './pages/Squadre';
import Calciatori from './pages/Calciatori';
import Contatti from './pages/Contatti';
import ErrorPage from './pages/ErrorPage';
import SmallCard from './components/SmallCard';
import BigCard, {loader as leagueLoader}  from "./components/BigCard";
import SmallCardTeam from "./components/SmallCardTeam";
import XlCard, {loader as teamLoader} from "./components/XlCard";
import SmallCardPlayer from "./components/SmallCardPlayer";
import XlCardPlayer, {loader as playerLoader} from "./components/XlCardPlayer";

const router = createBrowserRouter([

  {path: '', element: <RootPage></RootPage>, errorElement: <ErrorPage></ErrorPage>,
  children:[
  {index: true, element: <HomePage></HomePage>},
  
  {path: 'campionati', element: <Campionati></Campionati>,
  children:[
  {index: true, id:'total-Camp', element: <SmallCard></SmallCard> , loader: campLoader},
  {path: ':idCampo', id:'total-league', loader: leagueLoader, element: <BigCard></BigCard>}
  ]
  },

  {path: 'squadre', element: <Squadre></Squadre>,
  children:[
  {index: true, id:'total-Team', element: <SmallCardTeam></SmallCardTeam>, loader: campLoader},
  {path: ':idTeam', id:'detail', element: <XlCard></XlCard>, loader: teamLoader}
  ]
  },
  {path: 'calciatori', element: <Calciatori></Calciatori>,
  children:[
  {index: true, id:'total-Player', element: <SmallCardPlayer></SmallCardPlayer>, loader: campLoader},
  {path: ':idPlay/:idSea/:idTea', id:'detail-player', element:<XlCardPlayer></XlCardPlayer> , loader:playerLoader}
  ]
  },

  {path: 'contatti', element: <Contatti></Contatti>},   
  
  ]},
  ]);

function App() {
return (
<RouterProvider
router = {router}> 
</RouterProvider>
  );
}

export default App;
