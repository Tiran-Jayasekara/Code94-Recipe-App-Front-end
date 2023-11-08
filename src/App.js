import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import RecipeDetails from './pages/RecipeDetails';


function App() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundImage: 'url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/7/27/0/min_turkey_chili.jpg.rend.hgtvcom.966.725.suffix/1639169070086.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center'  }}>
    <Router> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipeDetails' element={<RecipeDetails/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
