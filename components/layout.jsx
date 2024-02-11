import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Head>
        <title>우코딩 포트폴리오</title>
        <meta name="description" content="우코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
