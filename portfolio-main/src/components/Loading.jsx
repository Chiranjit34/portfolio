import LogoS from "../assets/logo-c.png";

export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="header__content__logo">
        <img src={LogoS} height={45} alt="Logo" />
      </div>
    </div>
  );
}
