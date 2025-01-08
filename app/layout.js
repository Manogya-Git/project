import { Toaster } from "sonner";
import { ThemeProvider } from "./ThemeProvider";  // Updated import path
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
