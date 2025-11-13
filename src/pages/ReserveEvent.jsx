import Reserve from "../components/Reserve";
import { useGlobal } from "../GlobalContext";

export default function ReserveEvent() {
  const { globalID } = useGlobal();
  return (
    <div>
      <h1>Reserva este evento!!!</h1>
      <Reserve id={globalID} />
    </div>
  );
}
