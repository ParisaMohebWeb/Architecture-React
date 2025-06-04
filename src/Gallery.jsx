import "./Gallery.css";

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


export default function Gallery() {
  return (
    <>
      <section className="gallery">
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
    </>
  );
}
