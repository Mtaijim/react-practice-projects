import { useFeatureFlag } from "../context/FeatureFlagContext";
export function FeatureFlag({ flag, children, fallback = null }) {
  const isEnabled = useFeatureFlag(flag);
  if (isEnabled) return children;
  return fallback;
}
