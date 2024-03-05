import Logos from "./components/Logos";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Supercharge from "./components/Supercharge";
import Snippets from "./components/Snippets";
import Access from "./components/Access";
import BottomCta from "./components/BottomCta";
import Footer from "./components/Footer";
import DarkToggle from "./components/DarkToggle";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <DarkToggle />
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <Supercharge />
      <Logos />
      <BottomCta />
      <Footer />
    </div>
  );
}

export default App;
