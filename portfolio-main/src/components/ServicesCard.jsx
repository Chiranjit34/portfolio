export default function ServicesCard({ title, skills }) {
  return (
    <div className="card">
      <div className="card__heading">{title}</div>
      <div className="card__info">
        {skills.map((skill, i) =>
          i !== skills.length - 1 ? skill + ", " : skill
        )}
      </div>
      {/* <div>
        {icons.map((icon, j) => (j !== icons.length - 1 ? <icon/>+ ", " : <icon/>))}
      </div> */}
    </div>
  );
}
