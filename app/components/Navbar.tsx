const NavBar = () => {
  return (
    <div>
      <nav className="flex-auto items-center justify-center">
        <ul className="flex space-x-4">
          {" "}
          {/* Apply flexbox and spacing */}
          <li>
            <a href="/home" className="hover:text-blue-500">
              Home
            </a>{" "}
            {/* Add hover effects if needed */}
          </li>
          <li>
            <a href="/portfolio" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact me!
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
