import "./App.css";
import "./education-record.css";
import { Toaster } from "sonner";
import SoftwarePortfolio from "./pages/SoftwarePortfolio";

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <SoftwarePortfolio />
    </>
  );
}

export default App;
