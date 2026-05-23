import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
