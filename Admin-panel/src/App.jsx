import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashBoard from "./pages/DashBoard";
import Analytics from "./pages/Analytics";
import Upload from "./pages/Upload";
import Videos from "./pages/videos";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}
export default App;
