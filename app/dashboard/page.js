"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

function Page() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("white"); // Sets the theme to "white" on mount
  }, []);

  return;
}

export default Page;
