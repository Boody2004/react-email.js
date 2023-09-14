import Reservation from "./Components/reservation.jsx";
import Policy from "./Components/policy.jsx";
import Location from "./Components/location.jsx";

function App() {
  return (
    <section className="bg-mainColor px-[6.25vw]">
      <Reservation />
      <Policy />
      <Location />
    </section>
  );
}

export default App;
