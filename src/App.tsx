import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Home, Navbar } from "./containers";
import { AnalytBtn, Analytics, Footer } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden  ">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <Footer />
      <AnalytBtn />
      <Analytics />
    </div>
  );
}

export default App;
