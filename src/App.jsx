import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Navigation from "./components/navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-900 w-screen">
      <section>
        <Navigation></Navigation>
      </section>

      <section className=" ">
        <section className="bg-slate-900 h-screen px-20 pt-16">
          <div className=" grid justify-start text-zinc-300 text-3xl   ">
            <p></p>
          </div>
        <div>
          <Home></Home>
        </div>
        </section>

        <section className=" ">
          <div className="col-span-1 grid justify-start mt-5 mb-10 ml-20 text-[#ffffff] text-5xl font-arvo ">
            <p>About Me</p>
          </div>
          <div>
            <About></About>
          </div>
        </section>

        <section className="">
          <div className="col-span-1 grid justify-start pt-5 ml-20 mb-10 mt-5 text-[#ffffff] text-5xl font-arvo">
            Skills
          </div>
          <div className="mx-20 mt-5 mb-20">
            <div className="grid  ">
              <Skills />
            </div>
          </div>
        </section>

        <section className="  ">
          <div className="mt-5 pl-20  text-[#ffffff] text-5xl font-arvo  mb-5 ">
            Projects
          </div>
          <div className="mx-20 mt-5 mb-20">
            <div className="grid  ">
              <Projects />
            </div>
          </div>
        </section>

        <section className="h-screen m-20 bg-slate-900 my-2">
          <div className="col-span-1 grid justify-start mt-5  text-[#ffffff] text-5xl font-arvo">
            Contact
          </div>
          <div className="">
            <Contact/>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;