import App from "./components/App";
import { Provider } from "preact-redux";
import store from "./store";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
