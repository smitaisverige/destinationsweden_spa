import { useState } from "react";
import Header from "./components/Header";
import Country from "./components/Country";
import City from "./components/City";
import Footer from "./components/Footer";
import sweden from "./data/sweden";

function App() {
  const [page, setPage] = useState(null); // null = Home, or city name

  const goBack = () => setPage(null);
{/* trying map function */}
  return (
    <>
      <Header updateFunction={setPage} />

      {!page && <Country country={sweden} selectCity={setPage} />}

      {sweden.cities.map((city) => (
        page === city.name && <City key={city.name} city={city} goBack={goBack} />
      ))}
{/*{selectedCity && (<City  city={selectedCity} goBack={() => setPage(null)}  /> )}
 */}
      <Footer />
    </>
  );
}

export default App;
