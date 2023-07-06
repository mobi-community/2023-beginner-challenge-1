import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routing";
import GlobalStyles from "./style/global";
import TargetOptionProvider from "./context/targetOption";

function App() {
  return (
    <TargetOptionProvider>
      <div className="App">
        <GlobalStyles />
        <RouterProvider router={router} />
      </div>
    </TargetOptionProvider>
  );
}

export default App;
