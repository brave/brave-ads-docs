---
sidebar_position: 2
---

# Reporting

Brave Ads ist von Grund auf so aufgebaut, dass es die höchsten Datenschutzstandards unterstützt. Standardmäßig blockiert der Brave Browser Drittanbieter-Tracking einschließlich Google Analytics, Adobe Analytics und anderen Drittanbieter-Berichts- und Messdienstleistern. Während Brave Ads Benutzerdaten respektiert (und nicht sammelt), bietet es Werbetreibenden auch nützliche, detaillierte Berichte über die Daten zur Kampagnen-Performance in einem einfachen, leicht lesbaren Dashboard. Es ermöglicht Marketern zudem, die Kampagnen-Performance mithilfe deiner eigenen Reporting-Systeme zu sehen.

## Werden meine Reportings vom Brave Browser blockiert?

Der erste Schritt besteht darin zu verstehen, was vom Brave Browser blockiert wird. Um dies zu tun, öffne Brave auf deinem Desktop und navigiere zu deiner Unternehmens-Website oder Kampagnen-Landingpage und folge diesen Schritten:

1. Klicke auf das Brave Symbol auf der rechten Seite der Adressleiste.
2. Erweitere das Menü „Erweiterte Steuerung“.
3. Klicke auf die violette Zahl neben „Blockiere Tracker und Anzeigen“, um anzuzeigen, was derzeit blockiert wird.

Blockierte Skripte deaktivieren die meisten, wenn nicht alle Funktionen für das Tracking durch Dritte. Hier ist eine hilfreiche Tabelle mit Beispielen für verschiedene Tracking-Szenarien und deren Kompatibilität mit Brave Ads:

| Beispielhafte Szenarien                                              | Beispielhafter Endpunkt für www.example.com | Kompatibel mit Brave Ads |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------ |
| Benutzerdefinierte Website-Analysen (First-Party) | analytics.example.com                       | JA                       |
| Google Analytics 4 (First-Party)                  | analytics.example.com                       | JA                       |
| Adobe Analytics (First-Party)                     | analytics.example.com                       | JA                       |
| Google Analytics 4 (gehostet von Google)          | google.com                                                  | NEIN                     |
| Adobe Analytics (gehostet von Adobe)              | adobe.com                                                   | NEIN                     |

## Brave Ads Manager-Reporting

Unabhängig davon, ob deine Kampagne über Managed Service oder Self-Service erworben wurde, haben alle Werbetreibenden Zugriff auf das Brave Ads-Reporting-Dashboard, um über die Leistung der Kampagnen zu berichten. Campaign dashboards update hourly with the option to export reporting for Notification ad campaigns on demand.

### Verfügbare Berichtsmesswerte im Brave Ads Manager

| Metriken                                | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                     | Notification | New Tab Takeover | Search |   |   |   |   |   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------- | ------ | - | - | - | - | - |
| Impressionen                            | Gezählt, wenn eine Anzeige für mindestens eine Sekunde auf dem Bildschirm angezeigt wird.                                                                                                                                                                                                                                                                                                                                        | X            | X                | X      |   |   |   |   |   |
| Klicks                                  | Gezählt, wenn ein User auf die Anzeige klickt. Schließt Klicks zum Schließen der Anzeige nicht ein.                                                                                                                                                                                                                                                                                                              | X            | X                | X      |   |   |   |   |   |
| CTR                                     | Die Click-through-Rate ist ein Prozentsatz, der Klicks im Verhältnis zu Impressionen ausdrückt.                                                                                                                                                                                                                                                                                                                                  | X            | X                | X      |   |   |   |   |   |
| Abgelehnt                               | Gezählt, wenn ein Benutzer auf die Schaltfläche „Schließen“ oder „x“ klickt, um eine Anzeige zu entfernen.                                                                                                                                                                                                                                                                                                                       | X            |                  |        |   |   |   |   |   |
| Website-Besuche                         | Gezählt, wenn der User auf eine Anzeige klickt und mindestens 5 Sekunden auf der Website des Werbetreibenden verbringt, wobei die Website in einem aktiven Browser-Tab geöffnet ist. Die 5 Sekunden müssen auf der Website verbracht werden, nachdem der User durch Klicken auf den Anzeigelink zur Seite gelangt ist, und der Tab muss die gesamte Zeit offen und aktiv bleiben, damit der Besuch gezählt wird. | X            |                  |        |   |   |   |   |   |
| Upvotes & downvotes | Gezählt, wenn ein User eine Anzeige in seinem Anzeigen-Verlauf entweder positiv oder negativ bewertet.                                                                                                                                                                                                                                                                                                                           | X            |                  |        |   |   |   |   |   |
| Konversionen                            | Summe aller Konversionen, einschließlich anonymer Konversionen ohne eine spezifische Klick- oder Ansichtszuordnung. Gezählt, wenn ein User eine festgelegte Konversions-Landingpage erreicht.                                                                                                                                                                                                                    | X            |                  |        |   |   |   |   |   |
| Click-through-Konversionen              | Gezählt, wenn ein User nach einer Anzeigeimpression und einem Klick auf die Anzeige eine festgelegte Konversions-Landingpage erreicht.                                                                                                                                                                                                                                                                                           | X            |                  |        |   |   |   |   |   |
| View-through-Konversionen               | Gezählt, wenn ein User eine festgelegte Konversions-Landingpage nach einer Anzeigeimpression erreicht.                                                                                                                                                                                                                                                                                                                           | X            |                  |        |   |   |   |   |   |

## Konversions-Reporting im Brave Ads Manager

Das Conversion-Reporting im Brave Ads Manager ermöglicht es Werbetreibenden, ein Conversion-Ereignis in den Werbekampagnen mit Brave zu definieren, indem eine URL verwendet wird, die anzeigt, wann ein Nutzer eine bestimmte Stufe der Customer Journey erreicht.

**Hauptpunkte**

- Conversions werden gezählt, wenn ein Brave User, der mit Ihrer Anzeige interagiert hat, eine bestimmte Seite auf Ihrer Website besucht.

- Die Messung ist möglich, weil Brave sowohl als Browser als auch als Ad-Server fungiert.

- Der Prozess erfolgt vollständig auf der Browser-Ebene, wodurch die Notwendigkeit für Cookies, Tags oder Tracking-Skripte auf deiner Website entfällt.

### Einschränkungen

- Conversion-Seiten-URLs **müssen** diese Bedingungen erfüllen, um genehmigt zu werden:
     - Dieselbe eTLD+1 wie die verwendete E-Mail-Domain verwenden
         - Zum Beispiel, wenn meine E-Mail-Adresse `admin@example.com` lautet, kann ich die Conversion-URL als eine Seite auf `https://example.com` oder eine Sub-Domain dieser Website setzen, wie z. B. `https://shop.example.com`.
- Brave kann die Konversion möglicherweise nicht zählen, wenn ein User den Brave Browser verlässt (z. B. beim Besuch von Drittanbieter-Apps wie App-Stores). In solchen Fällen sollten Werbetreibende zusätzliche unabhängige Reporting-Methoden verwenden, die von Drittanbietern bereitgestellt werden.

### Wahl einer effektiven Conversion-URL

Die Verwendung einer Conversion-URL ermöglicht eine genauere Messung der Werbewirksamkeit als das bloße Verfolgen von Besuchen auf der Startseite.

**Hauptpunkte:**

- Verwende ein URL-Muster, das falsche Positiv-Ergebnisse vermeidet.
     - Verwende nicht die Basis-Website-URL als Conversion-URL.
         - Klicks und Website-Besuche werden standardmäßig bereits für alle Brave Ads-Kampagnen gezählt.
- Wähle eine URL, die eine tiefere Aktion auf deiner Website repräsentiert, wie zum Beispiel:
     - Seite für abgeschlossene Anmeldungen
     - Willkommensseite für E-Mail-Abonnements
     - Bestätigungsseite des Kaufs
         - Zum Beispiel, bei einer Werbekampagne für `https://shoestore.com` wäre eine effektive Conversion-URL: `https://shoestore.com/check-out/thank-you*`
- Als Faustregel sollten alle Conversion-URLs in Platzhaltervariablen enden, um etwaige zusätzliche Abfrageparameter zu berücksichtigen, die den Conversion-Zählprozess stören könnten.
     - Ein Sternchen (\*) kann als Platzhaltervariable in Ihrer Conversion-URL verwendet werden, die Brave Ads anweist, diese Position in der URL als beliebigen Wert zu behandeln. Dies kann in verschiedenen Situationen verwendet werden, in denen sich die URLs von Konversions-Websites ähnlich verlaufen, aber unterschiedliche Werte enthalten, wie z. B. Produktverzeichnisse oder eindeutige Bestellnummern.
         - Zum Beispiel, basierend auf dem obigen Beispiel, würde `https://shoestore.com/check-out/thank-you*` effektiv jede URL erfassen, die bis zur Platzhaltervariable identisch ist, wie z.B.

### Erweiterte Verwendung von Platzhaltervariablen in Conversion-URLs

Platzhalterwerte können überall im Unterpfad der URL platziert werden, einschließlich zwischen den Pfadabschnitten. Hier sind einige Beispiele unter Verwendung eines hypothetischen Schuhgeschäfts, `https://shoestore.com`, das seine verfügbaren Schuhe nach Kategorie, Typ und Farbe auf seiner Website kategorisiert. Ihre Seiten sind daher alle nach folgendem Format strukturiert: `https://shoestore.com/category/type/color/`

- Beispiel 1: Diese Conversion-URL zählt Besuche auf Seiten im Verzeichnis „running-shoes“, die als „mens“ kategorisiert sind: `https://shoestore.com/running-shoes/*/mens*`
     - In diesem Fall repräsentiert das erste Sternchen jeden Typ, während das zweite der empfohlene nachgestellte Platzhalter bei allen Conversion-URLs ist.
- Beispiel 2: Diese Conversion-URL zählt Besuche auf Seiten für beliebige Schuhe, die als „childrens“ kategorisiert sind: `https://shoestore.com/*/childrens/*`
     - In diesem Fall repräsentiert das erste Sternchen die Unterpfade für jede Schuhkategorie. Das zweite Sternchen fungiert sowohl als Schuhfarbe als auch als der empfohlene nachgestellte Platzhalter.

### Erweiterte Steuerung der Zuordnung

Beim Einrichten einer Conversion-URL in Brave wirst du aufgefordert, ein Beobachtungsfenster auszuwählen, auch bekannt als Look-Back-Fenster. Dies bestimmt, wie lange nach einer Ad-View (oder einem Klick) eine Conversion der Werbekampagne zugeschrieben werden soll. Dies kann auf 1, 7 oder 30 Tage eingestellt werden, wobei 1 Tag die geringste Anzahl von Conversions erfasst und 30 Tage die meisten.

Conversions im Brave Ads Manager werden über drei Metriken dargestellt, um dir ein klareres Verständnis der Werbewirkung zu vermitteln:

- **Conversions**: Die Summe der Post-View- und Post-Klick-Conversions.
- **Post-Klick-Conversions** (Click-through): werden gezählt, wenn der Nutzer nach dem Klicken auf die Anzeige konvertiert.
- **Post-View-Conversions** (View-through): werden gezählt, wenn der Nutzer eine Anzeige sieht, aber nicht darauf klickt und später auf die Website zurückkehrt.

## Unabhängiges Reporting (First-Party)

Zusätzlich zu den Reports, die über das Brave-Dashboard angeboten werden, können Sie eine Kombination der folgenden Methoden verwenden, um die Ergebnisse Ihrer Brave Ads-Kampagne genau und unabhängig zu überprüfen:

### Einzigartige Landingpage-URL/Click-tracking-Parameter

Eine einzigartige Landingpage ist eine großartige Option, um den Traffic über die Serverlogs Ihrer Website oder das First-Party-Analytics-Dashboard zu zählen. Durch das Erstellen einer dedizierten Landingpage-URL (wie domain.com/brave) für die Kampagne und die Sicherstellung, dass sie nur für Brave Ads Kampagnen verwendet wird, kann der Traffic von dieser Seite kostenpflichtigen Kampagnen mit Brave zugeordnet werden.

### Referenz-/Aktionscode

Ein Referenz- oder Aktionscode (z.B. brave15) kann zum Zeitpunkt des Checkouts verwendet werden, um Konversionen zu melden, die Ihrer Kampagne zugeschrieben werden. Wir empfehlen, dass der Referenz- oder Aktionscode automatisch ausgefüllt wird, damit Benutzer ihn nicht vergessen. Mit den Reports Ihrer Plattform können Sie dann die Anzahl der Konversionen anzeigen, die den Promo- oder Referenzcode verwendet haben.

### Query-String-Parameter und First-Party-Cookies (d.h. UTMs)

Click-URL-Tracking-Parameter sind erlaubt, aber nur, wenn sie in einer Weise verwendet werden, die Ihr Web-Server oder Ihre Web-Anwendung erkennen kann. Die Verwendung von Drittanbieter-Reports wie Google Analytics zeigt jedoch keine genauen Daten. Bitte beachten Sie, dass nur direkte URLs für den Klick-Link zulässig sind – keine Redirects.

##### Click-through-URL (UTM-Parameter)

- Beispiel: `https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test`
- Landingpage: `https://example.com/product`
- Query-String-Parameter (UTM): `utm_source=brave&utm_medium=push_notification&utm_campaign=test`

##### Click-through-URL (Query-String-Parameter)

- Beispiel: `https://example.com/product?ref=brave&type=push_notification&campaign=test`
- Landingpage: `https://example.com/product`
- Query-String-Parameter: `ref=brave&type=push_notification&campaign=test`

Werte analysieren und Erstanbieter-Cookies basierend auf den Abfragezeichenfolgenparametern aus der Click-through URL setzen. Diese gesamte Abfragezeichenfolge kann als Wert gesetzt oder in einzelne Schlüssel-Wert-Paare aufgeteilt werden.
Wenn derselbe User über einen anderen Kanal landet, kann dein Code-Snippet je nach deinen Präferenzen die Cookie-Werte mit den neuen Parameterwerten anhängen oder überschreiben.
Wenn der Benutzer die erwartete Aktion abschließt und eine Netzwerkanforderung an Ihre Server gesendet wird, sollten die Cookies an die Anforderungsheader angehängt werden und Sie können sehen, dass ein Benutzer von einer Brave Ads-Kampagne gekommen ist.

## Verifizierbare Werbe-Konversionen (VAC)

Verifizierbare Werbe-Konversionen (VAC) sind ein optionales Feature-Set des Brave Ads Konversions-Reportings. VAC bietet Brave-Werbetreibenden die Möglichkeit, ihre Rendite auf Werbeausgaben zu bestimmen, indem verschlüsselte Konversions-IDs privat gemeldet werden. Werbetreibende können dann die Liste der verschlüsselten Konversions-IDs prüfen, um zu verifizieren, dass der konvertierte Benutzer einer Brave Ads-Kampagne zugeschrieben werden kann.

Wenn ein berechtigter Benutzer auf der Konversionsseite landet, wird ein Prozess ausgelöst, der es dem Werbetreibenden ermöglicht, das spezifische Transaktionsereignis zu berücksichtigen, während die Privatsphäre und Anonymität der Benutzer gewahrt bleibt. Nicht einmal Brave kann etwas über dieses Ereignis erfahren oder lernen (abgesehen von der anonym gemeldeten Anzahl der Konversionsereignisse). Dies ermöglicht End-to-End-Privatsphäre und lässt Benutzer sich besser über ihr Konversionsereignis fühlen, da sie wissen, dass niemand etwas aus der Konversion erfahren kann.

Advertisers who choose to use VAC will generate a public-private key pair in the Account Settings of the Brave Ads interface. Brave wird den öffentlichen Schlüssel behalten, die Konversions-ID damit signieren und die verschlüsselte Konversions-ID melden. Nur der Werbetreibende wird den privaten Schlüssel haben und nur der Werbetreibende wird in der Lage sein, die verschlüsselte Konversions-ID zu entschlüsseln.

Es ist entscheidend, dass der Werbetreibende seinen privaten Schlüssel für verifizierbare Anzeigenkonversionen nicht verliert.

### Details zur Konversionsereignis-ID

Das Reporting verifizierbarer Anzeigenkonversionen erfolgt durch eine Konversions-ID. Für Ihre Website kann dies eine Bestellnummer, eine Transaktions-ID oder etwas Ähnliches sein.

### Anforderungen:

- Der Wert der Konversions-ID muss für jede Konversion eindeutig sein. Doppelte Konversionsereignis-ID-Werte führen zu Berechnungsabweichungen.
- Die Conversion-ID muss zwischen 1 und 30 Zeichen lang sein, nur alphanumerische Zeichen (sowie Bindestriche) enthalten und diesem regulären Ausdruck entsprechen: `[-a-zA-Z0-9]{1,30}`.
- Ereigniswerte, die länger als 30 Zeichen sind, werden fehlschlagen und verhindern, dass das Ereignis genau erfasst wird. Sie können überprüfen, ob Ihre Kennung gültig ist, indem Sie eine Website wie `https://regex101.com/` verwenden.
- Die Konversions-IDs dürfen keine Benutzerkennungen oder personenbezogenen Informationen enthalten. For example, Conversion IDs like the following are not permitted: `<user id>-<random id>`, `<random id>-<email address>`.

Brave verwendet TweetNacl um die Konversions-ID zu verschlüsseln.

Verschlüsselte Konversionsumschläge werden wie folgt aussehen:

```json
{
 "alg": "crypto_box_curve25519xsalsa20poly1305",
 "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",
 "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",
 "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"
}
```

### Implementierungsoptionen

Brave bietet zwei Implementierungsoptionen für verifizierbare Konversionen unter Verwendung eines URL-Musters oder DOM-Element-Musters.

#### URL-Muster

Ein Werbetreibender hat eine Konversions-ID, die als Abfragezeichenfolgenparameter im URL-Muster der Konversionsseite vorhanden ist. Der Werbetreibende muss Brave den Abfragezeichenfolgen-Schlüssel zur Verfügung stellen, der die Konversions-ID identifiziert.

Wenn ein berechtigter Benutzer auf der URL der Konversionsseite landet, wird Brave:

- Ein Konversionsereignis aufzeichnen
- Die URL nach dem Abfragezeichenfolgen-Schlüssel durchsuchen, der die Konversions-ID identifiziert
- Die Konversions-ID verschlüsseln und aufzeichnen

Nehmen wir zum Beispiel die folgende URL der Konversionsseite: https://example.com/checkout?order=ABC-12345-xyz. Brave wird nach dem Abfragezeichenfolgen-Schlüssel order suchen und den Wert `ABC-12345-xyz` verschlüsseln.

#### DOM-Element-Muster

Ein Werbetreibender hat eine Konversions-ID, die im Document Object Model (DOM) der Konversionsseiten-URL vorhanden ist.

Der Werbetreibende muss Brave das DOM-Element liefern, das die Konversions-ID auf der Seite eindeutig identifiziert. Wenn ein berechtigter Benutzer auf der Konversionsseiten-URL landet, wird Brave:

- Ein Konversionsereignis aufzeichnen
- Das DOM nach dem Regex-Muster, das die Konversions-ID identifiziert, durchsuchen
- Die Konversions-ID verschlüsseln und aufzeichnen

Nehmen wir ein Beispiel für das folgende DOM-Element: `<div class='order-id-value'>Ihre Bestell-ID: ABC-12345-xyz</div>`. Brave wird nach diesem Muster suchen `Ihre Bestell-ID:.*`, eine Erfassungsgruppe setzen `([-a-zA-Z0-9]*)` und den Wert `ABC-12345-xyz` verschlüsseln.

## Untersuchungen zur Markenaufwertung

Brave-Markenaufwertungsstudien bestehen aus Vorher-Nachher-Forschungspolls, die über Brave durchgeführt werden, um Werbetreibenden zu helfen, die Auswirkungen ihrer Werbekampagnen über Medienmetriken wie Impressionen oder Klicks hinaus besser zu messen. Studien messen typischerweise Markenbewusstsein oder Berücksichtigung, können aber auch das Verständnis von Produkten verbessern oder andere Effekte auf Basis von bezahlten Medienausgaben bei Brave messen.

Vor der Kampagnenschaltung stellen Werbetreibende Brave eine Reihe von Fragen zur Verfügung, die in eine Umfrage strukturiert und über Brave Ads an ein Zielgruppenprofil verteilt werden, das mit der Werbekampagne übereinstimmt. Nach der Kampagne wird dieselbe Reihe von Fragen (und zusätzliche Fragen, die die Erinnerung an Anzeigen messen) gestellt.

Die Ergebnisse der Vorher-Nachher-Umfrage werden verglichen, um die Auswirkungen der Werbung zu messen. Hier sind einige Beispiele für Fragen, die während einer Studie gestellt werden können:

- **Markenbewusstsein**: Haben Sie schon einmal von „Werbetreibender Name“ gehört?
- **Anzeigenerinnerung**: Haben Sie in der vergangenen Woche eine Anzeige für „Werbetreibender Name“ gesehen?
- **Produktüberlegung**: Wie wahrscheinlich ist es, dass Sie in den nächsten Monaten „Produktname“ kaufen?

Studien können unabhängig von den Ausgaben zu einem festen Preis durchgeführt werden, können aber auch als Bonus für einzelne Kampagnen für Ausgaben oberhalb eines bestimmten Schwellenwerts enthalten sein. Kontaktieren Sie unser Vertriebsteam, um mehr zu erfahren.
