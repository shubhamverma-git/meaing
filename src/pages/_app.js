import { useEffect } from "react";
import "../styles/main.scss";
import { DefaultSeo } from "next-seo";
import favicon from "../../public/favicon.ico";
import Header from "@/General/Header/Header";
import Footer from "@/General/Footer/Footer";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-59GQNF07H0" });
  }, []);

  if (router?.pathname === "/404") {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: "icon",
            href: favicon.src,
            sizes: "48x48",
          },
          {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
            crossOrigin: "anonymous",
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
          },
        ]}
        additionalMetaTags={[
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
        ]}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
