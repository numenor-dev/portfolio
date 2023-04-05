import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="h-full flex flex-col">
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
