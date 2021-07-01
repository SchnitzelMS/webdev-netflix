// This is our film repository.
// If you want more films shown on the website, add them to the list below and refresh the page
function GetFilms() {
    return [
        {
            title: "Neue Filme",
            films: [
                {
                    name: "The Witcher",
                    director: "Andrzej Sapkowski,\n" +
                        "Lauren Schmidt Hissrich",
                    year: "2019",
                    description: "Der Hexer Geralt von Riva kämpft um einen Platz in der Welt und für Gold gegen gefährliche Monster. Gegen seinen Willen wird er in politische Intrigen und die Machenschaften der Zauberin Yennefer von Vengerberg verwickelt.",
                    actor: "Henry Cavill (Geralt von Riva)\n" +
                        "Anya Chalotra (Yennefer)\n" +
                        "Freya Allan (Princess Cirilla of Cintra)\n" +
                        "Joey Batey (Rittersporn)\n",
                    picture: "../Resources/example02.jpg"
                },
                {
                    name: "Vikings",
                    director: "Steve Wakefield, Keith Thompson, Sanne Wohlenberg, Liz Gill",
                    year: "2013–2020",
                    description: "Der Bauer Ragnar Lodbrok lebt im 8. Jahrhundert nach Christus mit seiner Frau und seinen Kindern im Stamm des Earl Haraldson. Im Sommer nimmt er an einer Raubfahrt teil, um sein karges Einkommen aufzubessern. Dabei setzt sich gegen seinen Anführer durch, weil er mit dessen Planung nicht einverstanden ist und beginnt mit einigen anderen Männern einen eigenen Raubzug. Dabei muss er sich mit immer neuen Herrschern messen und gerät durch seine Abenteuerlust in einen Konflikt mit seinem Bruder und seiner Ehefrau Lagertha.",
                    actor: "Travis Fimmel, Katheryn Winnick, Clive Standen, Jessalyn Gilsig, Gustaf Skarsgård, Gabriel Byrne, George Blagden, Donal Logue, Alexander Ludwig, Kevin Durand",
                    picture: "../Resources/example01.jpg"
                },
                {
                    name: "Dark",
                    director: "Quirin Berg, " +
                        "Max Wiedemann, " +
                        "Baran bo Odar, " +
                        "Jantje Friese",
                    year: "2017–2020",
                    description: "Als zwei Kinder spurlos verschwinden, gerät in Dark, der ersten deutschen Netflix-Serie, das Leben von vier Kleinstadt-Familien aus den Fugen. Nach und nach stellt sich heraus, dass die Familien auf mysteriöse Weise miteinander verbunden sind und jedes einzelne Familienmitglied ein düsteres Geheimnis hat.",
                    actor: "Louis Hofmann, Andreas Pietschmann, Dietrich Hollinderbäumer, Gina Stiebitz, Carina Wiese (2016) ",
                    picture: "../Resources/example07.jpg"
                }]
        },
        {
            title: "Derzeit beliebt",
            films: [
                {
                    name: "Brooklyn 99",
                    director: " Andy Samberg, Norm Hiscock, Sierra Teller Ornelas, Neil Campbell, Carol Kolb",
                    year: "2021",
                    description: "Detective Jake Peralta arbeitet im Polizeirevier 99 in Brooklyn. Er ist aufgeweckt, manchmal kindisch, aber dennoch ein ausgezeichneter Polizist. Auf dem Revier geht es chaotisch und unorthodox zu - bis zu dem Zeitpunkt, an dem der neue Chef Ray Holt die Zügel in die Hand nimmt. Er nimmt Vorschriften und seinen Job sehr ernst und verkörpert das genaue Gegenteil von Jake Peralta. Sein Ziel ist, den 99. Bezirk New Yorks zu einem sicheren Ort und den Chaotentrupp des Police Departments zu einer seriösen Abteilung zu machen. Nach einem anfänglichen Kleinkrieg zwischen den Mitarbeitern und ihrem neuen Chef beginnt das Team zusammenzuarbeiten, wobei es die Polizisten nicht immer schaffen, private Angelegenheiten strikt von beruflichen zu trennen.",
                    actor: "Andy Samberg (Jacob Peralta)\n" +
                        "Melissa Fumero (Amy Santiago)\n" +
                        "Stephanie Beatriz (Rosa Diaz)\n" +
                        "Chelsea Peretti (Gina Linetti)\n",
                    picture: "../Resources/example03.jpg"
                },
                {
                    name: "Rick and Morty",
                    director: "Justin Roiland, Dan Harmon",
                    year: "2013",
                    description: "Die US-amerikanische Animationsserie Rick and Morty erzählt von einem genialen Wissenschaftler und Erfinder und seinem weniger genialen Enkelsohn. Gemeinsam bestreiten die beiden täglich neue Abenteuer – ganz zum Missfallen von Mortys Eltern, die in Rick eher einen potentiellen Störenfried sehen.",
                    actor: "-",
                    picture: "../Resources/example08.jpg"
                },
                {
                    name: "Star Trek Discovery",
                    director: "Bryan Fuller\n" +
                        "David Semel",
                    year: "2021",
                    description: "",
                    actor: "Sonequa Martin-Green\n" +
                        "Doug Jones\n" +
                        "Shazad Latif\n" +
                        "Anthony Rapp\n" +
                        "Mary Wiseman\n" +
                        "Jason Isaacs\n" +
                        "Wilson Cruz\n" +
                        "Anson Mount",
                    picture: "../Resources/example04.jpg"
                }]
        },
        {
            title: "Nochmal ansehen",
            films: [{
                name: "KIN",
                director: "Daniel Casey, Jeff Arkuss, Dan Cohen",
                year: "2018",
                description: "Der junge Eli wächst seit dem Tod seiner Adoptivmutter alleine mit seinem Adoptivvater Hal auf und hat Probleme in der Schule. Um sein spärliches Taschengeld aufzustocken, sucht er in verlassenen Industrieanlagen nach Verwertbarem. Bei einem seiner Streifzüge findet er gefallene Soldaten mit futuristischen Anzügen. Als sich einer der Soldaten rührt, ergreift er die Flucht.",
                actor: "Jack Reynor: Jimmy\n" +
                    "James Franco: Taylor\n" +
                    "Zoë Kravitz: Milly\n" +
                    "Dennis Quaid: Hal\n" +
                    "Myles Truitt: Eli",
                picture: "../Resources/example05.jpg"
            },
                {
                    name: "Unser Planet",
                    director: "Alastair Fothergill",
                    year: "2019",
                    description: "Unser Planet ist eine Naturdokumentation aus dem Jahr 2019 mit David Attenborough. Unser Planet ist eine Naturdokumentation aus dem Hause Netflix. Von der entlegenen Arktis bis in die tiefen Dschungel Südamerikas werden einzigartige Naturgebiete auf dem ganzen Planeten erforscht.",
                    actor: "-",
                    picture: "../Resources/example06.jpg"
                },
                {
                    name: "Dark",
                    director: "Quirin Berg, " +
                        "Max Wiedemann, " +
                        "Baran bo Odar, " +
                        "Jantje Friese",
                    year: "2017–2020",
                    description: "Als zwei Kinder spurlos verschwinden, gerät in Dark, der ersten deutschen Netflix-Serie, das Leben von vier Kleinstadt-Familien aus den Fugen. Nach und nach stellt sich heraus, dass die Familien auf mysteriöse Weise miteinander verbunden sind und jedes einzelne Familienmitglied ein düsteres Geheimnis hat.",
                    actor: "Louis Hofmann, Andreas Pietschmann, Dietrich Hollinderbäumer, Gina Stiebitz, Carina Wiese (2016) ",
                    picture: "../Resources/example07.jpg"
                },
                {
                    name: "Star Trek Discovery",
                    director: "Bryan Fuller\n" +
                        "David Semel",
                    year: "2021",
                    description: "",
                    actor: "Sonequa Martin-Green\n" +
                        "Doug Jones\n" +
                        "Shazad Latif\n" +
                        "Anthony Rapp\n" +
                        "Mary Wiseman\n" +
                        "Jason Isaacs\n" +
                        "Wilson Cruz\n" +
                        "Anson Mount",
                    picture: "../Resources/example04.jpg"
                }]
        }
    ];
}