"use client";

import * as React from "react";
import {NextUIProvider} from '@nextui-org/react'
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient()




export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();


  return (
    <QueryClientProvider client={client}>
      <NextUIProvider navigate={router.push}>
      <main className="dark text-foreground bg-background">
          {children}
          </main>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
