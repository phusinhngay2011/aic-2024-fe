"use client";

import { BaseProviderProps } from "@types";
import { useState } from "react";
import { LoadingContext } from "./context";

type LoadingProviderProps = BaseProviderProps;

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
