import Banner from "./components/Banner";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";
import { HashRouter } from "react-router-dom"





const App = () => {
  return (
    <HashRouter>
      <div className="container mx-auto px-4">
        <Header></Header>
        <Banner></Banner>
        <Recipe></Recipe>
        {/* recipe card section */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* card section */}
          <Recipes>

          </Recipes>

          {/* sidebar section */}
          <Sidebar></Sidebar>


        </section>

      </div>
    </HashRouter>
  );
};

export default App;