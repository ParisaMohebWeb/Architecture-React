
import "./App.css";
import Header from "./Header";
import Part2 from "./Part2";
import SliderPart from "./sliderPart";
import Part3 from "./Part3";
import Gallery from "./Gallery";
import Footer from "./Footer";


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
      <Footer/>
      

      <section className="spg">
        <a href="#"><i className="bi bi-chevron-up"></i></a>
      </section>
    </>
  );
}

export default App;
