import { Set } from './set.model';

export const defaultSets: Set[] = [
  {
    id: 'ki-geigemueller',
    label: 'Künstliche Intelligenz',
    cards: [
    {
      'label': 'Wichtige Vertreter / Wissenschaftler der KI Forschung und ihr wissenschaftlicher Beitrag, mind. 3 (0101–1400)',
      'box': 1,
      'topic': 0,
      'id': 0
    },
    {
      'label': '3 wichtige Entwicklungslinien als Grundlagen der symbolorientierten KI (0101 - Folie 17)',
      'box': 1,
      'topic': 0,
      'id': 1
    },
    {
      'label': 'Charakteristische Merkmale der Forschungsrichtung KI im Vergleich zu anderen Richtungen der Informatik, mind. 3 (0101–1400)',
      'box': 1,
      'topic': 1,
      'id': 2
    },
    {
      'label': 'Merkmale bei den sich Mensch und intelligenter Automat ergänzen – Kooperation (0101 - Folie 13–14)',
      'box': 1,
      'topic': 1,
      'id': 3
    },
    {
      'label': 'Arten / Typen von Intelligenz und ihre Charakteristika (0107–0109 (Heimarbeit))',
      'box': 1,
      'topic': 1,
      'id': 4
    },
    {
      'label': 'Der Turing Test - Durchführung, Wesen, Vorteile, Nachteile, Kritiken (0101 – (Folie 58, 66) )',
      'box': 1,
      'topic': 1,
      'id': 5
    },
    {
      'label': 'Merkmale, die die Fähigkeiten von Intelligenz beschreiben, Definitionen verschiedener Wissenschaftler und eigene Definitionen, mind. 10 (0101 (Folie 50–57))',
      'box': 1,
      'topic': 1,
      'id': 6
    },
    {
      'label': 'Schwache KI vs. Starke KI, was bedeutet das im Einzelnen, Erläuterung anhand von Schank‘s \'Restaurant Geschichten\' oder anhand von Searl‘s \'Chinesischem Zimmer\' oder ein eigenes Beispiel (0101 (Folien 67–70, 82) )',
      'box': 1,
      'topic': 1,
      'id': 7
    },
    {
      'label': 'Heutige Forschungsschwerpunkte der KI (0101 – Folien 91–94, 1400 – Folie 40)',
      'box': 1,
      'topic': 1,
      'id': 8
    },
    {
      'label': 'Zwei grundlegende konträre Paradigmen der KI: symbolorientiert vs. konnektionistisch. Was bedeutet das im Einzelnen, Unterschiede? (0101 – Folien 95–100, 1200, 1400)',
      'box': 1,
      'topic': 1,
      'id': 9
    },
    {
      'label': 'Aspekte der Modellierung der Wissensrepräsentation, Inhalt und Beispiel, mind. 3 (0201 – Folien 10–28 )',
      'box': 1,
      'topic': 2,
      'id': 10
    },
    {
      'label': 'Typische Repräsentationsformalismen der symbolischen KI, kurze Charakteristik, mind. 3 (0201 – Folie 1)',
      'box': 1,
      'topic': 2,
      'id': 11
    },
    {
      'label': 'Definitionen und Erläuterung der Begriffe der Logik, Syntax, Semantik, Alphabet, Kalkül, Axiom, Axiomensystem, Aussagenlogik, Prädikatenlogik, Literal, Aussage, Term (0202 – Folien 7–9 und weitere)',
      'box': 1,
      'topic': 2,
      'id': 12
    },
    {
      'label': 'Forderungen an ein Axiomensystem (0202 – Folie 15)',
      'box': 1,
      'topic': 2,
      'id': 13
    },
    {
      'label': 'Arten der Verknüpfungen der Aussagenlogik und Beispiele (0202 – Folien 17ff. )',
      'box': 1,
      'topic': 2,
      'id': 14
    },
    {
      'label': 'Typische Äquivalenzregeln der Aussagenlogik, mind. 5 (0202 – Folien 23ff.)',
      'box': 1,
      'topic': 2,
      'id': 15
    },
    {
      'label': 'Was bedeutet Kontradiktorisch, Beispiel eines entspr. Terms (0202)',
      'box': 1,
      'topic': 2,
      'id': 16
    },
    {
      'label': 'Hornlogik und Hornklauseln (0202 – Folien 20, 21)',
      'box': 1,
      'topic': 2,
      'id': 17
    },
    {
      'label': 'Resolutionsprinzip (0202 – Folien 42, 43 )',
      'box': 1,
      'topic': 2,
      'id': 18
    },
    {
      'label': 'Schlussregeln in der Aussagenlogik (0202 – Folien 30–39 )',
      'box': 1,
      'topic': 2,
      'id': 19
    },
    {
      'label': 'Grundansatz des PK1 als Erweiterung der Aussagenlogik (0203 – Folien 1,2,4ff. )',
      'box': 1,
      'topic': 2,
      'id': 20
    },
    {
      'label': 'Vor- und Nachteile des PK1 (0203  – Folie 12 )',
      'box': 1,
      'topic': 2,
      'id': 21
    },
    {
      'label': 'xx Aufgaben zu Aussagen bzw. Prädikatenlogik (0202 0203)',
      'box': 1,
      'topic': 2,
      'id': 22
    },
    {
      'label': 'Sortenlogik, wozu dient sie, Beispiel (0204)',
      'box': 1,
      'topic': 2,
      'id': 23
    },
    {
      'label': 'xx Modallogik, Operatoren und Verknüpfungen in der Modallogik, Beispiele, Deutungen in der Modallogik, Kripke Semantik (Kripke Struktur), Barcan-Regeln (Sinn und Unsinn ??) (0205 – Folien 3–24)',
      'box': 1,
      'topic': 2,
      'id': 24
    },
    {
      'label': 'Temporale Logik, fünf Modaloperatoren, Beispiele (0207 – Folien 9..)',
      'box': 1,
      'topic': 2,
      'id': 25
    },
    {
      'label': 'Bedeutung der Mengenquantoren in der Temporallogik, Beispiel (0207 – Folie 9)',
      'box': 1,
      'topic': 2,
      'id': 26
    },
    {
      'label': 'Was beinhaltet CTL (im Gegensatz zu LTL) in der Temporallogik und was drückt in der CTL folgendes aus: AG(p) ≡ ¬EF(¬p) (0207 – Folien 13,14)',
      'box': 1,
      'topic': 2,
      'id': 27
    },
    {
      'label': 'Mehrwertige Logik, Wirkung der Operatoren nach Lukasiewicz und Kleene (Tautologie und bedingte Eliminierung) (Optimismus vs. Pessimismus) (0208 – Folien 6–10)',
      'box': 1,
      'topic': 2,
      'id': 28
    },
    {
      'label': 'Fuzzy-Logik, Fuzzyfizierung, Grundstruktur eines Fuzzy-Systems, typische Zugehörigkeitsfunktionen, Defuzzyfizierung (0209 – Folien 7, 14, 23.., 39)',
      'box': 1,
      'topic': 3,
      'id': 29
    },
    {
      'label': 'Assoziative Netze, Eigenschaften, Beispiel, Vor- und Nachteile (0210 – Folien 2, 32 ff. )',
      'box': 1,
      'topic': 3,
      'id': 30
    },
    {
      'label': 'Konzeptrahmen, Eigenschaften, Beispiel, Vor- und Nachteile (0211 – Folien 2, 3..,11)',
      'box': 1,
      'topic': 3,
      'id': 31
    },
    {
      'label': 'Produktionssysteme, Eigenschaften, Beispiel, Vor- und Nachteile (0214 – Folien 1–6)',
      'box': 1,
      'topic': 3,
      'id': 32
    },
    {
      'label': 'Begriff der Inferenz und allgemeine Verfahren der Umsetzung in der KI (0500 – Folien 1–3)',
      'box': 1,
      'topic': 4,
      'id': 33
    },
    {
      'label': 'xx Erkläre was Vorwärts- und Rückwärtssuche, Tiefen- und Breitensuche bedeutet. (0500 – Folien 19, 27, 35, 38 u.a.)'
      ,'box': 1,
      'topic': 4,
      'id': 34
    },
    {
      'label': 'Aufzählung typischer Allzweck-Suchstrategien, ihre Eigenschaften (0500 – Folie 34)',
      'box': 1,
      'topic': 4,
      'id': 35
    },
    {
      'label': 'Suchstrategie Bergsteigen, das Verfahren und die bestehenden Probleme (0500 – Folie 36 )',
      'box': 1,
      'topic': 4,
      'id': 36
    },
    {
      'label': 'Nichtmonotonie bei der Inferenz (0500 – Folien 57–58ff)',
      'box': 1,
      'topic': 4,
      'id': 37
    },
    {
      'label': 'Modellbasiertes Schließen (im Skript: qualitatives und modellbasiertes Schließen) (0500 – Folie 64ff.)',
      'box': 1,
      'topic': 4,
      'id': 38
    },
    {
      'label': 'Strukturbild und Bestandteile, Stärken und Schwächen (0900, 0904 – Folie 3)',
      'box': 1,
      'topic': 5,
      'id': 39
    },
    {
      'label': 'Verwendete Suchstrategien in SWD-Expert, Unterschiede, ihre Vor- und Nachteile (0900, 0904 – Folie 1)',
      'box': 1,
      'topic': 5,
      'id': 40
    },
    {
      'label': 'Formen der Wissensrepräsentation im SWD-Expert (0900, 0904 – Folie 4)',
      'box': 1,
      'topic': 5,
      'id': 41
    },
    {
      'label': 'besondere Eigenschaften von KI-Sprachen (0300 – Folie 3–5 )',
      'box': 1,
      'topic': 6,
      'id': 42
    },
    {
      'label': 'Typen von Programmiersprachen und ihre Paradigmen (0300 – Folie 6 )',
      'box': 1,
      'topic': 6,
      'id': 43
    },
    {
      'label': 'Jeweils typische Charakteristika von LISP, Prolog, Smalltalk, Java (0300 – Folien 6–8 )',
      'box': 1,
      'topic': 6,
      'id': 44
    },
    {
      'label': 'Beispiel und Notation in Prolog (0600 – Heimarbeit )',
      'box': 1,
      'topic': 6,
      'id': 45
    },
    {
      'label': 'Klassifikation akustischer Datenverarbeitung (1000 – Folien 2,3 )',
      'box': 1,
      'topic': 7,
      'id': 46
    },
    {
      'label': 'Strukturelle Bestandteile einer natürlichen Sprache (1000 – Folien 16–19 )',
      'box': 1,
      'topic': 7,
      'id': 47
    },
    {
      'label': 'xx Verfahren der segmentierten Spracherkennung (1000 – Folie 22)',
      'box': 1,
      'topic': 7,
      'id': 48
    },
    {
      'label': 'xx Aufzählung typischer KI Verfahren der Wissensrepräsentation und Inferenz in der Sprachverarbeitung (1000 – Folien 29–39 )',
      'box': 1,
      'topic': 7,
      'id': 49
    },
    {
      'label': 'Das abstrakte Modell eines Neuronenkomplexes (1200 – Folien 4–6)',
      'box': 1,
      'topic': 8,
      'id': 50
    },
    {
      'label': 'allgemeine Charakteristik neuronaler Netze, positive Eigenschaften u. ungeeigneter Einsatz (1200 – Folien 7–9, 13, 14)'
      ,'box': 1,
      'topic': 8,
      'id': 51
    },
    {
      'label': 'Typische Aktivierungszustände und Aktivierungsregeln (1200 – Folien 19, 209)',
      'box': 1,
      'topic': 8,
      'id': 52
    },
    {
      'label': 'Bestimmende Komponenten des Netzverbunds (Verbindungsstruktur, Kontroll-strategie, ...) (1200 – Folien 22–29)',
      'box': 1,
      'topic': 8,
      'id': 53
    },
    {
      'label': 'Netzwerktopologien (1200 – Folien 22–29)',
      'box': 1,
      'topic': 8,
      'id': 54
    },
    {
      'label': 'Adaline, Madaline (1200 – Folien 32–37 )',
      'box': 1,
      'topic': 8,
      'id': 55
    },
    {
      'label': 'Perceptron und MLP (1200 – Folien 32, 38 )',
      'box': 1,
      'topic': 8,
      'id': 56
    },
    {
      'label': 'xx Backpropagation (1200 – Folien 39–41 )',
      'box': 1,
      'topic': 8,
      'id': 57
    },
    {
      'label': 'Erläuterung, Charakteristik, Lernen, Regression und Klassifikation (1400 Folien 2–12 )',
      'box': 1,
      'topic': 9,
      'id': 58
    },
    {
      'label': 'Lernverfahren (1400 – Folien 13–18, 21)',
      'box': 1,
      'topic': 9,
      'id': 59
    },
    {
      'label': 'Methoden / Verfahren für Maschinelles Lernen (1400 Folien 22–36)',
      'box': 1,
      'topic': 9,
      'id': 60
    },
    {
      'label': 'Was wird für Maschinelles Lernen benötigt (1400 Folie 11 )',
      'box': 1,
      'topic': 9,
      'id': 61}],
    topics: [
      {
        id: 0,
        label: 'Geschichte der Entwicklungen im Bereich „Künstliche Intelligenz”',
      },
      {
        id: 1,
        label: 'Allgemeine Charakteristik der KI',
      },
      {
        id: 2,
        label: 'Wissensrepräsentation',
      },
      {
        id: 3,
        label: 'Fuzzy',
      },
      {
        id: 4,
        label: 'Inferenz',
      },
      {
        id: 5,
        label: 'Expertensysteme und XPS-Shell „SWD-Expert“',
      },
      {
        id: 6,
        label: 'KI-Sprachen',
      },
      {
        id: 7,
        label: 'Sprachverstehen',
      },
      {
        id: 8,
        label: 'Neuronale Netze',
      },
      {
        id: 9,
        label: 'Maschinelles Lernen'
      }
    ]
  },
  {
    id: 'recht-gratz-pruefungsvorbereitung',
    label: 'Recht Gratz - Prüfungsvorbereitung',
    cards: [
      {
        'label': 'Was zählt zu privatem Recht? Nenne 4 Beispiele.',
        'box': 1,
        'topic': 0,
        'id': 0
      },
      {
        'label': 'Was ist ein Rechtsgeschäft?',
        'box': 1,
        'topic': 0,
        'id': 1
      },
      {
        'label': 'Wie kommt ein Vertrag zustande?',
        'box': 1,
        'topic': 0,
        'id': 2
      },
      {
        'label': 'Wie geht eine Willenserklärung zu?',
        'box': 1,
        'topic': 0,
        'id': 3
      },
      {
        'label': 'Was ist die Einladung zur Abgabe eines Angebots?',
        'box': 1,
        'topic': 0,
        'id': 4
      },
      {
        'label': 'Wann erlischt ein Angebot?',
        'box': 1,
        'topic': 0,
        'id': 5
      },
      {
        'label': 'Erläutern sie den Inhalt eines Kaufmännischen Bestätigungsschreibens.',
        'box': 1,
        'topic': 0,
        'id': 6
      },
      {
        'label': 'Beschreiben sie zwei Anfechtungsgründe.',
        'box': 1,
        'topic': 0,
        'id': 7
      },
      {
        'label': 'Nennen sie drei Formvorschriften',
        'box': 1,
        'topic': 0,
        'id': 8
      },
      {
        'label': 'Welche Voraussetzungen müssen für eine wirksame Vertretung gegeben sein?',
        'box': 1,
        'topic': 0,
        'id': 9
      },
      {
        'label': 'Wer ist nach dem Gesetz für eine GbR, OHG und KG vertretungsbefugt?',
        'box': 1,
        'topic': 0,
        'id': 10
      },
      {
        'label': 'Erläutern sie zwei Fälle der Haftung für fremdes Verschulden.',
        'box': 1,
        'topic': 0,
        'id': 11
      },
      {
        'label': 'Was sind Voraussetzungen für den Schuldenverzug?',
        'box': 1,
        'topic': 0,
        'id': 12
      },
      {
        'label': 'Welche Haftungspflichten haben Verkäufer und Käufer eines Kaufvertrages?',
        'box': 1,
        'topic': 0,
        'id': 13
      },
      {
        'label': 'Wann liegt ein Sachmangel vor?',
        'box': 1,
        'topic': 0,
        'id': 14
      },
      {
        'label': 'Erläutern sie zwei Mängelrechte des Käufers.',
        'box': 1,
        'topic': 0,
        'id': 15
      },
      {
        'label': 'Welche Bedeutung hat der Gefahrenübergang bei den Mängelrechten?',
        'box': 1,
        'topic': 0,
        'id': 16
      },
      {
        'label': 'Erläutern sie die Rügepflicht beim Wareneingang.',
        'box': 1,
        'topic': 0,
        'id': 17
      },
      {
        'label': 'Wann liegen AGB vor?',
        'box': 1,
        'topic': 0,
        'id': 18
      },
      {
        'label': 'Wie werden AGB im Vertrag einbezogen?',
        'box': 1,
        'topic': 0,
        'id': 19
      },
      {
        'label': 'Erläutern sie die Rechtsfolgen bei der Verwendung von sich widersprechenden AGB durch die Vertragspartner.',
        'box': 1,
        'topic': 0,
        'id': 20
      },
      {
        'label': 'In welchen Fällen können Mietverträge ordentlich bzw. außerordentlich gekündigt werden?',
        'box': 1,
        'topic': 0,
        'id': 21
      },
      {
        'label': 'Was sind Schönheitsreparaturen?',
        'box': 1,
        'topic': 0,
        'id': 22
      },
      {
        'label': 'Wie können Betriebskosten wirksam auf die Mieter umgelegt werden?',
        'box': 1,
        'topic': 0,
        'id': 23
      },
      {
        'label': 'Wie wird ein Kaufmann nach dem HGB definiert?',
        'box': 1,
        'topic': 0,
        'id': 24
      },
      {
        'label': 'Erläutern sie zwei der sieben Firemngrundsätze.',
        'box': 1,
        'topic': 0,
        'id': 25
      },
      {
        'label': 'Was versteht man unter der Publizität beim Handelsregister?',
        'box': 1,
        'topic': 0,
        'id': 26
      },
      {
        'label': 'In welchen Fällen kann ein Arbeitsverhältnis befristet werden?',
        'box': 1,
        'topic': 0,
        'id': 27
      },
      {
        'label': 'Was versteht man unter dem Kündigungsschutz?',
        'box': 1,
        'topic': 0,
        'id': 28
      }
    ],
    topics: [
      {
        id: 0,
        label: 'Prüfungsvorbereitung'
      }
    ]
  }
];
