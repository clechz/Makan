import { navLinks } from "../constants";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <header>
      <nav>
        <img
          src="/logo.svg"
          alt="Apple logo"
          className="cursor-pointer"
          onClick={scrollToTop}
        />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="gap-3 flex-center">
          <a
            href="#request-demo"
            className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-semibold hover:opacity-90"
          >
            Request demo
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
