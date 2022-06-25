import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="services__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">What i can do for you</div>
        <div className="home__section__heading">Skills</div>
      </div>
      <div className="services__section__content">
        <ServicesCard
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Matrial UI",
            "Bootstrap",
            "Tailwind",
            "Chakra UI",
            "NPM",
            "Git",
            "Postman",
          ]}
        />
        <ServicesCard
          title="Backend"
          skills={[
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
            "Git",
            "NPM",
            "Postman",
            "Rest",
          ]}
        />
        <ServicesCard
          title="Testing & Analytics"
          skills={["Firebase", "Cypress", "Jest"]}
        />
      </div>
    </section>
  );
}
