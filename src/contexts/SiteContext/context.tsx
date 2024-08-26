"use client";
import { createContext } from "react";

type SiteContextFields = {
  siteName: string;
  setSiteName(site: string): void;
  description: string;
  setDescription(description: string): void;
};

export const SiteContext = createContext<SiteContextFields>({
  siteName: "",
  setSiteName: (site: string) => {
    throw Error("Not implemented yet");
  },
  description: "",
  setDescription: (description: string) => {
    throw Error("Not implemented yet");
  },
});
