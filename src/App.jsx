import { useState } from "react";
import Header from "./components/Header";
import Country from "./components/Country";
import City from "./components/City";
import Footer from "./components/Footer";
import sweden from "./data/sweden";

function App() {
  const [page, setPage] = useState(null);

  const selectedCity = sweden.cities.find( (city) => city.name === page );

  return (
    <>
      <Header updateFunction={setPage} />
      
      {!page && (<Country country={sweden} selectCity={setPage} /> )}
      
      {selectedCity && (<City  city={selectedCity} goBack={() => setPage(null)}  /> )}
      
      <Footer />
    </>
  );
}

export default App;