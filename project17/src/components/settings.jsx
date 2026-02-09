import { useFeatureFlag } from "../context/FeatureFlagContext";
import { FeatureFlag } from "./FeatureFlag";

function Settings() {
  const enableNotification = useFeatureFlag("enableNotifications");
  return (
    <div>
      <h2>Settings</h2>

      {enableNotification && (
        <div>
          <h3>notification settings </h3>
          <label>
            <input type="checkbox" />
            Email
          </label>
          <label>
            <input type="checkbox" /> push
          </label>
        </div>
      )}
      <FeatureFlag flag="showBetaFeatures">
        <div>
          <h3>Beta Settings</h3>
          <p>Experimental features</p>
        </div>
      </FeatureFlag>
    </div>
  );
}
export default Settings;
