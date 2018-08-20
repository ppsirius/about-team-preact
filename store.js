import { createStore } from "redux";

let ACTIONS = {
  openSlider: ({ todos, ...state }, { text }) => ({
    todos: [
      ...todos,
      {
        id: Math.random()
          .toString(36)
          .substring(2),
        text
      }
    ],
    ...state
  })
};

const INITIAL = {
  sliderIsOpen: false
};

export default createStore(
  (state, action) =>
    action && ACTIONS[action.type]
      ? ACTIONS[action.type](state, action)
      : state,
  INITIAL,
  typeof devToolsExtension === "function" ? devToolsExtension() : undefined
);
