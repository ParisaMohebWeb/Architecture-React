import "./Part2.css";
import homeImage from "./assets/img/home-image1.webp";


export default function Part2() {
  return (
   <>
    <section className="part2">
      <div>
        <h2>BUILD YOUR AVADA</h2>
        <div class="linep2"></div>
        <p>
          Avada & Avada create exceptional properties, including residential and
          commercial developments.
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
          Etiam purus lorem, aliquet a eros sit amet, vestibulum finibus augue.
          Cras egestas neque vitae dui tincidunt, vitae tristique tellus
          volutpat. Fusce justo ante, interdum in augue in, commodo imperdiet
          turpis.
        </p>
        <p>
          Maecenas justo neque, efficitur sit amet scelerisque eu, ornare a
          justo. Morbi scelerisque ex ut consequat vestibulum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Praesent vel augue rutrum, scelerisque velit non, interdum nisl.
          Nunc accumsan commodo elit nec dapibus. Quisque aliquam eleifend nibh,
          eget finibus purus sagittis vel. Donec maximus egestas turpis sit amet
          luctus. In vitae libero enim.
        </p>
      </div>
    </section>
   </>
  );
}
