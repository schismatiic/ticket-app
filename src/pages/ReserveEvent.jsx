import Reserve from "../components/Reserve";
import { useGlobal } from "../GlobalContext";

export default function ReserveEvent() {
  const { globalID } = useGlobal();
  return (
    <div>
      <Reserve id={globalID} />
    </div>
  );
}
