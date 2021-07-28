import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";

export default function Informieren({ allPostsData }) {
  return (
    <>
      <Layout title="Informieren">
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Informieren
              </h2>
              <p className="text-xl text-gray-500 pt-6">
                Hier erfährts du mehr zum Thema Biodiversität in Deutschland
              </p>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {allPostsData.map(({ id, date, title }) => (
                <div key={title}>
                  <p className="text-sm text-gray-500">
                    <Date dateString={date}></Date>
                  </p>
                  <Link href={`/informieren/${id}`}>
                    <a className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Lorem ipsum
                      </p>
                    </a>
                  </Link>
                  <div className="mt-3">
                    <Link href={`/informieren/${id}`}>
                      <a className="text-base font-semibold text-green-600 hover:text-green-500">
                        Ganzen Artikel lesen
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
