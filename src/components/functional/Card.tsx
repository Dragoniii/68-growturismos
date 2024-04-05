interface CardProps {
  img: string;
  h2: string;
}

export function Card({img, h2}: CardProps) {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{h2}</h2>
      <button>Saiba mais!</button>
    </div>
  );
}
