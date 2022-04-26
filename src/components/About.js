import { useState, useEffect, useRef } from "react";

const About = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [textBubble, setTextBubble] = useState([
    {
      text: `Let's chat!
      <br/>Type 'help' below for a full list of commands,<br/>'about' for the usual rundown,<br/> or 'skills' for a list of technologies I've used in the past.`,
      name: `Zach`,
      id: 1,
      type: ''
    },
  ]);
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue != "") {
      e.preventDefault();
      const textBubbleData = { text: inputValue, name: "Guest", id: 2, type: '' };
      setInputValue("");
      setTextBubble((arr) => [...arr, textBubbleData]);
      let textBubbleText, textBubbleType = "";

      if (inputValue.includes("help")) {
        const skillArray = ['skills', 'github', 'linkedin', 'resume', 'contact', 'about'];
        textBubbleText = `commands: ${skillArray.map(skill => ' ' + skill)}`;
      } else if (
        inputValue.includes("skill") ||
        inputValue.includes("language")
      ) {
        textBubbleText = `JavaScript ES6+, TypeScript, React, HTML/CSS/SCSS, Bootstrap, Liquid, node.js, PHP, jQuery, Git, npm/yarn, Webpack, WordPress, Shopify, Contentful + Headless builds, Klaviyo, ReCharge, Yotpo`;
      } else if (inputValue.includes("github")) {
        textBubbleText = `https://github.com/zl743`;
        textBubbleType = 'link';
      }
      else if (inputValue.includes("about")) {
        textBubbleType = 'about';
        textBubbleText = `I'm a front-end developer with 5+ years of experience in the e-commerce industry. I'm currently working on some Shopify Plus projects in my current role, but I've had experience working in many different tech stacks. You can ask me more about my skills if you'd like!<br/><br/> Apart from designing and developing sites from scratch, I'm also a Pokemon master and a masochist New York Knicks fan located in the Tri-State area.`;
      }
      else if (inputValue.includes("linkedin")) {
        textBubbleText = `https://www.linkedin.com/feed/`;
        textBubbleType = 'link';
      } else {
        textBubbleText = `no comprende`;
      }

      const textBubbleDataResponse = {
        text: textBubbleText,
        name: "Zach",
        id: 1,
        type: textBubbleType
      };
      setTextBubble((arr) => [...arr, textBubbleDataResponse]);
      console.log(textBubble);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="section" data-anchor="about" data-index="1">
      <div className="aboutContainer">
        {textBubble.map((user, idx) => {
          return (
            <div className="textBubble" key={user.idx} data-user={user.id}>
              <div
                className="textBubble--text"

              >
                {user.type == 'link' ?  <a href={user.text} target="_blank">Here</a> : user.text.split("<br/>").join("\n")}
              </div>
              <div className="textBubble--username">{user.name}</div>
            </div>
          );
        })}
      </div>
      <div className="typewriter">
        <h1>Zachary Lee</h1>
      </div>
      <form className="textInputContainer" onSubmit={(e) => handleSubmit(e)}>
        <input
          key="sadffff"
          className="textInput"
          type="text"
          value={inputValue}
          placeholder="ask away"
          onChange={(e) => onChangeHandler(e)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default About;
