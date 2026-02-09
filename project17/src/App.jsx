import { FeatureFlagProvider } from "./context/FeatureFlagContext";
import DashBoard from "./components/Dashboard";
import Settings from "./components/settings";
import AdminPanel from "./components/adminPanel";

function App() {
  return (
    <FeatureFlagProvider>
      <AdminPanel />
      <DashBoard />
      <Settings />
    </FeatureFlagProvider>
  );
}

export default App;
