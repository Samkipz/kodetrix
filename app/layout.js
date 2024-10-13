import "@/app/globals.css";
import { quicksand } from "@/app/ui/fonts.js";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Kodetrix",
  description:
    "We offer expertise in web development, mobile development, and cloud infrastructure. We also offer data analytics, AI, ML, and IoT to create real-world impact in sectors such as Finance, Agriculture, and Health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
