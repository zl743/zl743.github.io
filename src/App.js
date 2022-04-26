import { useState, useEffect } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Pageable from "pageable";
import AOS from "aos";
//import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const updateAnimation = (index) => {
    console.log(index);
    const toAnimate = document.querySelectorAll(
      `#myFullpage .section[data-anchor]:nth-child(${index}) .aos-init`
    );
    toAnimate.forEach((elem) => {
      elem.classList.add("aos-animate");
      elem.style.opacity = 1;
    });
  };
  useEffect(() => {
    AOS.init();

    const pages = new Pageable("#myFullpage", {
      events: {
        //mouse: false,
      },
      onInit: function (e) {
        console.log(e);
        setTimeout(function () {
          updateAnimation(e.index + 1);
        }, 500);
      },
      onFinish: function (e) {
        updateAnimation(e.index + 1);
      },
    });
    console.log("test");
  }, []);

  return (
    <div className="App">
      <div id="myFullpage">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
