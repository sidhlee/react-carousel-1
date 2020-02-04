import React from "react";
import "./App.css";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward
} from "react-icons/fa";

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

function SlideNav(props) {
  return <ul className="SlideNav" {...props} />;
}

function SlideNavItem() {
  return (
    <li className="SlideNavItem">
      <button>
        <span />
      </button>
    </li>
  );
}

function Controls(props) {
  return <div className="Controls" {...props} />;
}

function IconButton(props) {
  return <button {...props} className="IconButton" />;
}

function SpacerGif({ width }) {
  return <div style={{ display: "inline-block", width }} />;
}

function ProgressBar() {
  const progress = 0.7;
  return (
    <div className="ProgressBar">
      <div style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

function App() {
  return (
    // TODO: refactor - move array mapping into components.
    <div className="App">
      <Slides>
        {slides.map((image, index) => (
          <Slide
            key={index}
            image={image.img}
            title={image.title}
            children={image.content}
          />
        ))}
      </Slides>
      <SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem key={index} />
        ))}
      </SlideNav>
      <Controls>
        <IconButton children={<FaPause />} />
        <IconButton children={<FaPlay />} />
        <SpacerGif width="10px" />
        <IconButton children={<FaBackward />} />
        <IconButton children={<FaForward />} />
      </Controls>
      <ProgressBar />
      <div>
        This is some accessibility features for SR
        <h3>VisuallyHidden</h3>
        <div>Alert></div>
      </div>
    </div>
  );
}

export default App;
