
import "./App.css";
import Header from "./Header";
import Part2 from "./Part2";
import SliderPart from "./sliderPart";
import Part3 from "./Part3";
import Gallery from "./Gallery";


function App() {
  return (
    <>
      <section className="backimg">
        <div>
          <h1>AVADA ARCHITECTURE</h1>
          <p>concept to creation - perfect form & function</p>
        </div>
      </section>  

      <Header/>
      <Part2/>
      <SliderPart/>
      <Part3/> 
      <Gallery/>   

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
