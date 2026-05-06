import RoutesApp from "./routes";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <RoutesApp />
    </>
  );
}

export default App;
