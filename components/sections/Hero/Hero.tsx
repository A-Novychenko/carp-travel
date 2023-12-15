import locationList from "@/data/locationList.json";

export const Hero = () => (
  <section>
    <div>
      <h1>Uncover Carpathian’s Secrets</h1>
      <ul>
        {locationList &&
          locationList.map(({name}, idx) => (
            <li key={idx}>
              <p>{name}</p>
            </li>
          ))}
      </ul>
    </div>

    <div>
      <div>
        <p>
          <span>7</span>DAYS
        </p>
        <p>JOURNEY</p>
      </div>
      <p>
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <p>There will be button &quot;JOIN NOW&quot; here</p>
    </div>
  </section>
);
