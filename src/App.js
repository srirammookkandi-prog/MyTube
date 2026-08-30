import { Provider } from "react-redux";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import store from "./utility/store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./component/Body/MainContainer/VideoContainer/VideoContainer";
import WatchPage from "./component/WatchPage/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <VideoContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }
  ]
}])
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
