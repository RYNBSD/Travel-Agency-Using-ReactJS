import './App.css';

/*
  import Header from "./pages/Header";
  import Flights from "./pages/Flights";
  import Special from "./pages/Special";
  import Travel from "./pages/Travel";
  import Recommended from "./pages/Recommended";
  import Comments from "./pages/Comments";
  import Footer from "./pages/Footer";
*/

import {
  Header,
  Flights,
  Special,
  Travel,
  Recommended,
  Comments,
  Footer
} from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Flights />
      <Special />
      <Travel />
      <Recommended />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
