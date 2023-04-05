import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Nick Ahlers",
    description: `Love to code, especially with React and NextJS!`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta
          property="url"
          content={`https://google.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://google.com${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nick Ahlers" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full h-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
