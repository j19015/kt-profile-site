import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 w-full shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <nav>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="hover:text-gray-100 transition duration-300">TOP</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/skill" className="hover:text-gray-100 transition duration-300">Skill</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/portfolio" className="hover:text-gray-100 transition duration-300">Portfolio</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="hover:text-gray-100 transition duration-300">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-300">
              <FaFacebook className="text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-300">
              <FaTwitter className="text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-300">
              <FaInstagram className="text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};