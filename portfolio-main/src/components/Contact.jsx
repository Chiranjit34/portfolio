import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "react-feather";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uagldh",
        "template_746402j",
        form.current,
        "0Ohy0N8v6pYPHyROJ"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section
      id="contact__section"
      className="services__section"
      style={{ overflow: "unset" }}
    >
      <div
        className="services__section__header"
        style={{ alignItems: "flex-start" }}
      >
        <div className="home__section__sub__heading">Get in touch</div>
        <div className="home__section__heading">Contact</div>
      </div>
      <div
        className="services__section__content services__section__content__special"
        style={{ alignItems: "flex-start", marginRight: "-2em" }}
      >
        <div className="services__section__content__left">
          <div className="services__section__content__left__entry">
            <div className="services__section__content__left__entry__icon">
              <MapPin size={20} color="currentColor" />
            </div>
            <div className="services__section__content__left__entry__content">
              Bhadrak, Odisha, India
            </div>
          </div>
          <div className="services__section__content__left__entry">
            <div className="services__section__content__left__entry__icon">
              <Phone size={20} color="currentColor" />
            </div>
            <div className="services__section__content__left__entry__content">
              <a href="tel:+919090475233">+91 9090475233</a>
            </div>
          </div>
          <div className="services__section__content__left__entry">
            <div className="services__section__content__left__entry__icon">
              <Mail size={20} color="currentColor" />
            </div>
            <div className="services__section__content__left__entry__content">
              chiranjitbehera34@gmail.com
            </div>
          </div>
        </div>
        <div className="services__section__content__right">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="services__section__content__right__form"
          >
            <div className="home__section__heading">Say Something</div>
            <InputBox placeholder="Your Name" type="text" />
            <InputBox placeholder="Email Address" type="email" />
            <InputBox placeholder="Subject" type="text" />
            <TextareaBox placeholder="Message" />
            <button
              className="home__section__button"
              style={{ width: "100%", marginTop: 20 }}
              title="send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InputBox({ placeholder, type, onChange }) {
  const [onFucus, setOnFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="services__section__content__right__form__input">
      <label
        className="services__section__content__right__form__input__label"
        style={
          value !== ""
            ? { top: -10, zIndex: 1 }
            : onFucus
            ? { top: -10, zIndex: 1 }
            : null
        }
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={placeholder}
        id={placeholder}
        value={value}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        className="services__section__content__right__form__input__field"
      />
    </div>
  );
}
function TextareaBox({ placeholder, onChange }) {
  const [onFucus, setOnFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="services__section__content__right__form__input">
      <label
        className="services__section__content__right__form__input__label"
        style={
          value !== ""
            ? { top: -10, zIndex: 1 }
            : onFucus
            ? { top: -10, zIndex: 1 }
            : null
        }
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <textarea
        name={placeholder}
        value={value}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        id={placeholder}
        className="services__section__content__right__form__input__field services__section__content__right__form__input__field__textarea"
      />
    </div>
  );
}
