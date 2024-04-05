export interface CardPlanosProps {
  h2: string;
  servicosInclusos: Array<string>;
}

export function CardPlanos({ h2, servicosInclusos }: CardPlanosProps) {
  return (
    <div>
      <h2>{h2}</h2>
      <hr />
      <ul>
        {servicosInclusos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button>Saiba mais!</button>
    </div>
  );
}
