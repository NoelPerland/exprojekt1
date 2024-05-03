import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/home";
import { Auth } from "./Pages/auth";
import { CreateRecipe } from "./Pages/create-recipe";
import { SavedRecipes } from "./Pages/saved-recipes";
import { Navbar } from "./components/navbar";
import "./styles/tailwind.css"; // Import Tailwind CSS

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
