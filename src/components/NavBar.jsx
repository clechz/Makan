const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav>
        <div className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer" onClick={scrollToTop}>
          <img
            src="/logo-full.png"
            alt="Makan logo"
            className="h-10"
          />
        </div>

        <ul className="absolute left-1/2 -translate-x-1/2">
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>

        <div className="gap-3 flex-center absolute right-5">
          <button className="px-6 py-2 text-sm font-semibold text-black transition-all duration-300 ease-in-out rounded-full cursor-pointer bg-white hover:bg-gray-200">
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
