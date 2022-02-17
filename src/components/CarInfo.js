import { useCarContext } from "../contexts/CarContext";

export function CarInfo() {
  const { name, brand } = useCarContext();
  return (
    <section>
      <ul>
        <li>
          <span>Name car: </span>
          {name}
        </li>
        <li>
          <span>Brand car: </span>
          {brand}
        </li>
      </ul>
    </section>
  );
}
