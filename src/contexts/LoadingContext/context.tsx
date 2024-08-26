"use client";
import { createContext } from "react";

type LoadingContextFields = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextFields>({
  loading: false,
  setLoading: (loading: boolean) => {
    throw new Error("Not implemented yet");
  },
});
