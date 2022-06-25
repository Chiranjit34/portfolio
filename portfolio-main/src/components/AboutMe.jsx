import { pic } from "../assets";

export default function AboutMe() {
  return (
    <section id="about__section" className="about__section">
      <div className="about__section__left">
        <div className="about__section__left__content">
          <img
            src={pic}
            alt="img"
            className="about__section__left__content__img"
          />
        </div>
      </div>
      <div className="about__section__right">
        <div className="home__section__sub__heading">
          Let me introduce myself
        </div>
        <div
          className="home__section__heading"
          style={{
            marginBottom: -20,
          }}
        >
          About me
        </div>
        <div
          className="home__section__info"
          style={{
            marginBottom: 0,
          }}
        >
          Hello everyone, I'm a Web Developer based in India. I enjoy turning
          complex problems into simple, beautiful and intuitive solutions.
          Studying this time at "Masai School"
        </div>
        <div
          className="home__section__info"
          style={{
            marginBottom: 0,
            marginTop: 20,
          }}
        >
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects. I'm quietly
          confident, naturally curious, and perpetually working on improving my
          chops one design problem at a time.
        </div>
        <div
          className="home__section__info"
          style={{
            marginBottom: 0,
            marginTop: 20,
          }}
        >
          🦄 <span>Skills:</span> HTML, CSS, JavaScript, Bootstrap, MUI,
          ReactJS, MongoDB, ExpressJS, NodeJS, Typescript, Rest
        </div>
        <div
          className="home__section__info"
          style={{
            marginTop: 20,
          }}
        >
          💼 <span>Tools:</span> Visual Studio Code, GitHub Desktop, Windows
          Terminal, Firebase, Netlify, and Git.
        </div>
        <a
          href="https://docs.google.com/document/d/1Jd-NupakVKpP6dAcEEJ_BC4hlgwuy3f-hrHGt1fqW8o/edit"
          className="home__section__button"
          title="Download CV"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
