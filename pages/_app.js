import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="h-full flex flex-col">
      <Component {...pageProps} />
      <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
