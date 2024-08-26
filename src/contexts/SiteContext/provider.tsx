"use client";

import { BaseProviderProps } from "@types";
import { useState } from "react";
import { SiteContext } from "./context";

type SiteProviderProps = BaseProviderProps;

export function SiteProvider({ children }: SiteProviderProps) {
  const [siteName, setSiteName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <SiteContext.Provider
      value={{
        siteName,
        setSiteName,
        description,
        setDescription,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
