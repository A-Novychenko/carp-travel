import {ChooseUsForm} from "@/components/elements/ChooseUsForm/ChooseUsForm";
import whyUseData from "@/data/whyUsData.json";

export const Career = () => (
  <section>
    <div>
      <h2>CHOOSE US</h2>
      <p>
        Your chance to join our passionate team in Carpathian tourism. Seeking
        talented professionals to share our common mission.{" "}
      </p>
    </div>
    <div>
      <h3>Why us ?</h3>
      <ul>
        {whyUseData &&
          whyUseData.map(({advantages, description}, idx) => (
            <li key={idx}>
              <p>{advantages}</p>
              <p>{description}</p>
            </li>
          ))}
      </ul>
    </div>
    <div>
      <p>
        Don&apos;t miss your opportunity! Fill out the form right now and join
        our team!
      </p>
      <ChooseUsForm />
    </div>
  </section>
);
