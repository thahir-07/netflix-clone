import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RowPost from "./components/row-post/RowPost";
import {trending, originals,action,horror,comedyMovies,romance,documentaries} from "./url";
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div >
    <Navbar/>
    <Banner/>
    
    <RowPost title='Netflix Originals' isSmall url={originals}/>
    <RowPost title='Action' isSmall url={action}/>
    <RowPost title='Horror' isSmall url={horror}/>
    <RowPost title='Trending' url={trending}/>
    <RowPost title='Comedy Movies' isSmall url={comedyMovies}/>
    <RowPost title='Romance' isSmall url={romance}/>
    <RowPost title='Documentaries' isSmall url={documentaries}/>
    </div>
  );
}

export default App;
