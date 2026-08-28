import { Provider } from "react-redux";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import store from "./utility/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
