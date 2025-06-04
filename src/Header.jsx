
import './Header.css'
function Header() {
  return (
    <>
      <header>
        <figure>
          <img src="Img/logo-avada-architect.png" alt="" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <ul>
                <li>
                  <a href="#">Architecture</a>
                </li>
                <li>
                  <a href="#">Interior Desgin</a>
                </li>
                <li>
                  <a href="#">Landscape</a>
                </li>
                <li>
                  <a href="#">Engineering</a>
                </li>
                <li>
                  <a href="#">Project Managment</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Content</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
