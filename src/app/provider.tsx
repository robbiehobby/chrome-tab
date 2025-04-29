import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import Page from "../features/closetab/components/page.tsx";
import "@radix-ui/themes/styles.css";
import "./global.css";

createRoot(document.body).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <Theme style={{ minHeight: "unset" }}>
        <Page />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
);
