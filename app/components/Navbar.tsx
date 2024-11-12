const NavBar = () => {
  return (
    <div className="bg-gray-800 border-solid p-4">
      <nav className="flex justify-center">
        <ul className="flex align-middle flex-col md:flex-row md:space-y-0 md:space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end align-top">
        <p className="align-top bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Source for site
        </p>
      </div>
    </div>
  );
};

export default NavBar;
