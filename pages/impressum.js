import Layout from "../components/layout";

export default function Impressum() {
  return (
    <>
      <Layout title="Impressum">
        <main className="overflow-hidden">
          {/* Header */}
          <div className="bg-warm-gray-50">
            <div className="py-12 lg:py-18">
              <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl text-center">
                  Impressum
                </h1>
                <p className="my-12 text-xl text-warm-gray-500 text-center">
                  Dieses Projekt entstand als Teil der Initiative{" "}
                  <a
                    class="underline hover:text-green-600"
                    href="https://savediversity.de"
                    target="_blank"
                  >
                    SAVEDiversity
                  </a>
                </p>
                <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                  <p className="mt-8">Angaben gemäß § 5 TMG</p>
                  <div>
                    <ul class="list-none">
                      <li>Team SAVEDiversity</li>{" "}
                      <li>Vertreten durch: Fabio Maienschein </li>{" "}
                      <li>Kontakt: E-Mail: kontakt@savediversity.de</li>
                    </ul>
                    <h3 className="text-2xl mt-16">Haftungsausschluss:</h3>
                    <h4>Haftung für Inhalte</h4>
                    <p>
                      {" "}
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                      erstellt. Für die Richtigkeit, Vollständigkeit und
                      Aktualität der Inhalte können wir jedoch keine Gewähr
                      übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
                      TMG für eigene Inhalte auf diesen Seiten nach den
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                      sind wir als Diensteanbieter jedoch nicht verpflichtet,
                      übermittelte oder gespeicherte fremde Informationen zu
                      überwachen oder nach Umständen zu forschen, die auf eine
                      rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                      Entfernung oder Sperrung der Nutzung von Informationen
                      nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                      Eine diesbezügliche Haftung ist jedoch erst ab dem
                      Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                      möglich. Bei Bekanntwerden von entsprechenden
                      Rechtsverletzungen werden wir diese Inhalte umgehend
                      entfernen.
                    </p>{" "}
                    <h4>Haftung für Links</h4>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                      der Verlinkung auf mögliche Rechtsverstöße überprüft.
                      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
                      nicht erkennbar. Eine permanente inhaltliche Kontrolle der
                      verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                      von Rechtsverletzungen werden wir derartige Links umgehend
                      entfernen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
