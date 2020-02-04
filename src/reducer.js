import slides from "./slides/slides";

export default (state, action) => {
  switch (action.type) {
    case "PROGRESS":
    case "NEXT":
      return {
        ...state,
        takeFocus: false,
        isPlaying: action.type === "PROGRESS",
        currentIndex: (state.currentIndex + 1) % slides.length
      };
    case "PREV":
      return {
        ...state,
        takeFocus: false,
        isPlaying: false,
        currentIndex:
          (state.currentIndex - 1 + slides.length) % slides.length
      };
    case "PLAY":
      return {
        ...state,
        takeFocus: false,
        isPlaying: true
      };
    case "PAUSE":
      return {
        ...state,
        takeFocus: false,
        isPlaying: false
      };
    case "GOTO":
      return {
        ...state,
        takeFocus: true,
        currentIndex: action.index
      };
    default:
      return state;
  }
};
