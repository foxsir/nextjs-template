"use client"

import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import {ReactNode} from "react";

export default function Provider({children}: { children: ReactNode }) {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      {children}
      <ToastProvider />
    </HeroUIProvider>
  );
}
