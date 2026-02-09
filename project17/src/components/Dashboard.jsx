import { useFeatureFlag } from "../context/FeatureFlagContext";
import { FeatureFlag } from "./FeatureFlag";

function DashBoard() {
  const showNewDashBoard = useFeatureFlag("showNewDashBoard");
  const enabledDarkMode = useFeatureFlag("enabledDarkMode");
  return (
    <div style={{ padding: "20px" }}>
      <h1>My app Dashboard</h1>
      {showNewDashBoard ? (
        <div>✨ New Dashboard UI</div>
      ) : (
        <div>📊 Old Dashboard UI</div>
      )}
      <div style={{ marginTop: "10px" }}>
        Theme: {enabledDarkMode ? "Light" : "Dark"}
      </div>
      <FeatureFlag flag="enableNotification">
        <div style={{ marginTop: "10px" }}>🔔 Notifications Enabled</div>
      </FeatureFlag>
      <FeatureFlag
        flag="showBetaFeature"
        fallback={<div>beta feature disabled</div>}
      >
        beta feature enabled
      </FeatureFlag>
    </div>
  );
}

export default DashBoard;
