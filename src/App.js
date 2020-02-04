import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";
import "./App.css";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward
} from "react-icons/fa";

import reducer from "./reducer";
import slides from "./slides/slides";

function Slides(props) {
  return <ul {...props} />;
}

function Slide({ title, children, image, isCurrent, position }) {
  return (
    <li
      aria-hidden={!isCurrent}
      className="Slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`SlideContent ${position}`}>
        <h2>{title}</h2>
        {children}
      </div>
    </li>
  );
}

function SlideNav(props) {
  return <ul className="SlideNav" {...props} />;
}

function SlideNavItem({ isCurrent, ...props }) {
  return (
    <li className="SlideNavItem">
      <button {...props} aria-current={isCurrent}>
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
  // modularize state management
  // You can use returned dispatch to update state with action objects.
  const initialState = {
    currentIndex: 0,
    isPlaying: false,
    takeFocus: false
  };
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.isPlaying) {
      let timeout = setTimeout(() => {
        dispatch({ type: "PROGRESS" });
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [state.currentIndex, state.isPlaying]);
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
            isCurrent={index === state.currentIndex}
            position={image.position}
          />
        ))}
      </Slides>
      <SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem
            key={index}
            isCurrent={index === state.currentIndex}
            onClick={() => dispatch({ type: "GOTO", index })}
          />
        ))}
      </SlideNav>
      <Controls>
        <IconButton
          children={<FaPause />}
          onClick={() => dispatch({ type: "PAUSE" })}
        />
        <IconButton
          children={<FaPlay />}
          onClick={() => dispatch({ type: "PLAY" })}
        />
        <SpacerGif width="10px" />
        <IconButton
          onClick={() => dispatch({ type: "PREV" })}
          children={<FaBackward />}
        />
        <IconButton
          onClick={() => dispatch({ type: "NEXT" })}
          children={<FaForward />}
        />
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
