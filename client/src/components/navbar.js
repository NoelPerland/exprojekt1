import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-white">
          Home
        </Link>
        <div className="flex space-x-8 items-center">
          <NavLinkWithAccessibility to="/create-recipe">
            Create Recipe
          </NavLinkWithAccessibility>
          <NavLinkWithAccessibility to="/saved-recipes">
            Saved Recipes
          </NavLinkWithAccessibility>
          <NavLinkWithAccessibility to="/auth">
            Login or Register
          </NavLinkWithAccessibility>
        </div>
      </div>
    </nav>
  );
};

const NavLinkWithAccessibility = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-lg text-white hover:text-gray-300"
      tabIndex="0"
    >
      {children}
    </Link>
  );
};
