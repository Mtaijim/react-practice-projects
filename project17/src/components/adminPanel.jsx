import { useAllFlags } from "../context/FeatureFlagContext";

function AdminPanel() {
  const { flags, toggleFlag } = useAllFlags();

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>Admin Panel (Feature Flags)</h2>

      {Object.keys(flags).map((flag) => (
        <div key={flag}>
          <label>
            <input
              type="checkbox"
              checked={flags[flag]}
              onChange={() => toggleFlag(flag)}
            />
            {flag}
          </label>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
