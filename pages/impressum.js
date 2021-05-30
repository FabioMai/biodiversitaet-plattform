import Layout from "../components/layout";

export default function Impressum() {
  return (
    <>
      <Layout title="Impressum">
        <main className="overflow-hidden">
          {/* Header */}
          <div className="bg-warm-gray-50">
            <div className="py-24 lg:py-32">
              <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                  Impressum
                </h1>
                <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                  Dieses Projekt entstand als Teil der Initiative{" "}
                  <a href="savediversity.de" target="_blank">
                    SAVEDiversity
                  </a>
                </p>
                <p className="mt-8">Angaben gemäß § 5 TMG</p>
                <div>
                  Team SAVEDiversity Vertreten durch: Fabio Maienschein Kontakt:
                  E-Mail: kontakt@savediversity.de
                  <p className="text-xl mt-16">Haftungsausschluss:</p>
                  Haftung für Inhalte <br></br> Die Inhalte unserer Seiten
                  wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch
                  keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß §
                  7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                  wir als Diensteanbieter jedoch nicht verpflichtet,
                  übermittelte oder gespeicherte fremde Informationen zu
                  überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                  Entfernung oder Sperrung der Nutzung von Informationen nach
                  den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                  diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                  diese Inhalte umgehend entfernen. <br></br> Haftung für Links{" "}
                  <br></br>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen.
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
