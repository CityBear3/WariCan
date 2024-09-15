"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { TransportProvider } from "@connectrpc/connect-query";
import { createConnectTransport } from "@connectrpc/connect-web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { v4 as uuidV4 } from "uuid";

const finalTransport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  interceptors: [
    (next) => (request) => {
      request.header.append(
        "X-Idempotency-Key", uuidV4()
      );
      request.header.append("X-Development-User", "07D45731-9E1D-4023-A439-0D5977190BD8");
      return next(request);
    },
  ],
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <TransportProvider transport={finalTransport}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </TransportProvider>
    </ChakraProvider>
  );
}
