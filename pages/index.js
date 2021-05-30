import Head from "next/head";
import { Header, Hero, Projects, Contact, Footer } from "../sections/index";
import { parseBetterPlace, parseEcoCrowd } from "../utils/parse";
import { useEffect } from "react";
import Head from "next/head";

export default function Home({ projects }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Plattform für Biodiversität</title>
        <meta
          name="description"
          content="Auf unserer Plattform für Biodiversität findest du Infos und Projekte rund um das Thema Biodiversität."
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main style={{ scrollBehavior: "smooth" }}>
        <Header></Header>
        <Hero></Hero>
        <Projects projects={projects}></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.betterplace.org/de/api_v4/search?q=Biodiversit%C3%A4t&page=1&per_page=100&facets=state:activated|min_activity_threshold_reached:true|hidden_from_platform:false&order=category_boost:desc|score:desc|completed:asc|rank:desc|last_donation_at:desc`
  );
  const betterplaceJson = await res.json();
  const betterplaceProjects = parseBetterPlace(betterplaceJson);

  const response = await fetch(
    `https://www.ecocrowd.de/projekt-kategorien/artenschutz/`
  );
  const htmlString = await response.text();
  const ecoCrowdProjects = parseEcoCrowd(htmlString);

  const projects = betterplaceProjects.concat(ecoCrowdProjects);
  return {
    props: { projects },
  };
}
