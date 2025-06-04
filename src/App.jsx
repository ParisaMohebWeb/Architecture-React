import "./App.css";

import homeImage from "./assets/img/home-image1.webp";
import image1 from "./assets/img/1.webp";
import image11 from "./assets/img/11.webp";
import image222 from "./assets/img/222.jpg";
import image22 from "./assets/img/22.webp";
import image2222 from "./assets/img/2222.jpg";
import image33 from "./assets/img/33.webp";
import image4 from "./assets/img/4.webp";
import image44 from "./assets/img/44.webp";
import image5 from "./assets/img/5.webp";
import image55 from "./assets/img/55.webp";
import image6 from "./assets/img/6.webp";
import image66 from "./assets/img/66.webp";



function App() {
  return (
    <>
      <section className="backimg">
        <div>
          <h1>AVADA ARCHITECTURE</h1>
          <p>concept to creation - perfect form & function</p>
        </div>
      </section>
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

      <section className="part2">
        <div>
          <h2>BUILD YOUR AVADA</h2>
          <div class="linep2"></div>
          <p>
            Avada & Avada create exceptional properties, including residential
            and commercial developments.
          </p>
        </div>
        <div>
          <figure>
            <img src={homeImage} alt="" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio
            tellus, ullamcorper id tempor in, hendrerit ut nulla. Maecenas
            dignissim tellus at quam interdum tempus.{" "}
          </p>
          <p>
            Phasellus ultricies, urna nec accumsan vehicula, turpis ipsum
            tristique ligula, eget congue est enim suscipit turpis cras nectus
            ipsum.
          </p>
        </div>
        <div>
          <p>
            Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus
            augue. Cras egestas neque vitae dui tincidunt, vitae tristique
            tellus volutpat. Fusce justo ante, interdum in augue in, commodo
            imperdiet turpis.
          </p>
          <p>
            Maecenas justo neque, efficitur sit amet scelerisque eu, ornare a
            justo. Morbi scelerisque ex ut consequat vestibulum. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Praesent vel augue rutrum, scelerisque velit non,
            interdum nisl. Nunc accumsan commodo elit nec dapibus. Quisque
            aliquam eleifend nibh, eget finibus purus sagittis vel. Donec
            maximus egestas turpis sit amet luctus. In vitae libero enim.
          </p>
        </div>
      </section>

      <section className="slid1">
        <div></div>
        <p>ARCHITECTURE</p>
      </section>
      <section className="slid2">
        <div></div>
        <p>INTERIOR DESIGN</p>
      </section>
      <section className="slid3">
        <div></div>
        <p>LANDSCAPE</p>
      </section>
      <section className="slid4">
        <div></div>
        <p>ENGINEERING</p>
      </section>
      <section className="slid5">
        <div></div>
        <p>PROJECT MANAGEMENT</p>
      </section>

      <section className="part3">
        <div>
          <h3> RECENT PROJECTS </h3>
        </div>
        <div></div>
        <div>
          <p>
            {" "}
            Avada & Avada is an award winning company with a reputation for
            consistent innovation at the highest level of design.
          </p>
        </div>
      </section>

      <section className="gallury">
        <div>
          <div>
            <figure>
              <a href="#">
                <img src={image1} alt="" />
                <img src={image11} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">Sunrise Avenue</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>

          <div>
            <figure>
              <a href="#">
                <img src={image222} alt="" />
                <img src={image22} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">Singapore Skyrise</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>

          <div>
            <figure>
              <a href="#">
                <img src={image2222} alt="" />
                <img src={image33} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">Sunrise Avenue</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <figure>
              <a href="#">
                <img src={image4} alt="" />
                <img src={image44} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">Danish Modernity</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>

          <div>
            <figure>
              <a href="#">
                <img src={image5} alt="" />
                <img src={image55} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">West Shinjuku</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>

          <div>
            <figure>
              <a href="#">
                <img src={image6} alt="" />
                <img src={image66} alt="" />
              </a>
            </figure>
            <div>
              <a href="#">Manchester Airport</a>
              <p>Commercial, Industrial</p>
            </div>
          </div>
        </div>
      </section>

          <footer>
            <div>
                <div>
                    <div><a href="#"><i className="bi bi-facebook"></i></a></div>
                    <div><a href="#"><i className="bi bi-twitter-x"></i></a></div>
                    <div><a href="#"><i className="bi bi-instagram"></i></a></div>
                    <div><a href="#"><i className="bi bi-youtube"></i></a></div>
                </div>
                <button>GUT IN TOUCH</button>
            </div>

            <div>
                <p>© 2012 - 2024 • <a href="#">Avada</a> is a <a href="#">Website Builder</a> for <a href="#">WordPress</a> and <a href="#">eCommerce</a> • All Rights Reserved • Developed by <a href="#">ThemeFusion</a></p>
                <p>1.800.555.6789 </p>
                <a href="#">EMAIL US</a>

            </div>
        </footer>

      <section className="spg">
        <a href="#"><i className="bi bi-chevron-up"></i></a>
      </section>
    </>
  );
}

export default App;
