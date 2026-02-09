import { useState } from "react";
import { createContext } from "react";
import { FeatureFlags as defaultFlags } from "../config/featureFlags";
import { useContext } from "react";

const FeatureFlagContext = createContext();

export function FeatureFlagProvider({ children }) {
  const [flags, SetFlags] = useState(defaultFlags);

  const toggleFlag = (flagname) => {
    SetFlags((prev) => ({
      ...prev,
      [flagname]: !prev[flagname],
    }));
  };
  return (
    <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlag(flagname) {
  const { flags } = useContext(FeatureFlagContext);
  return flags[flagname] || false;
}

export function useAllFlags() {
  return useContext(FeatureFlagContext);
}
