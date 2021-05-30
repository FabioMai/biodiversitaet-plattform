import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Auf unserer Plattform für Biodiversität findest du Infos und Projekte rund um das Thema Biodiversität."
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export function Header() {
  return (
    <header className="bg-green-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-center border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <a>
                <span className="sr-only">Biodiversitätsplattform</span>
                <img
                  className=" h-10 w-10"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/impressum" className="text-gray-400 hover:text-gray-500">
            <a>Impressum</a>
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2021 SAVEDiversity
          </p>
        </div>
      </div>
    </footer>
  );
}
