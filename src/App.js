import React from "react";
import "./App.css";

import slides from "./slides/slides";

function Slides(props) {
  return <ul {...props} />;
}

function Slide({ title, children, image }) {
  return (
    <li
      className="Slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="SlideContent">
        <h2>{title}</h2>
        {children}
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <Slides>
        {slides.map((image, index) => (
          <Slide key={index} image={image.img} title={image.title} />
        ))}
      </Slides>
      <div>SlideNav</div>
      <div>Controls</div>
      <div>ProgressBar</div>
      <div>
        This is some accessibility features for SR
        <h3>VisuallyHidden</h3>
        <div>Alert></div>
      </div>
    </div>
  );
}

export default App;
