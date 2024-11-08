const NavBar = () => {
  return (
    <div className="bg-gray-800 p-4 border-solid sticky top-0">
      <p className="flex">Source for site</p>
      <nav className="flex justify-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white">
          {" "}
          {/* Apply flexbox and spacing */}
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            {/* Add hover effects if needed */}
          </li>
          <li>
            <a href="#about-me">About Me!</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
