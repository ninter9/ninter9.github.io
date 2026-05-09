# Jeremy Šubrt – Portfolio (ITW Projekt 2)

## Popis řešení
Single-page portfolio web členěný do 5 sekcí: About, Projects, Education, Skills, Contact.
Sekce Education je dále dělena na timeline s položkami (podsekce).

Navigace je sticky (stále viditelná) a zvýrazňuje aktivní sekci při scrollování pomocí JavaScriptu (IntersectionObserver + scroll event).
Na mobilních zařízeních se navigace skryje a zobrazí se hamburger tlačítko.

Grafický styl je postaven na vlastním barevném schématu definovaném pomocí CSS proměnných (:root).
Layout využívá flexbox. Animace položek timeline jsou realizovány přes CSS transitions + IntersectionObserver.

## Struktura souborů
- index.html      – hlavní a jediný HTML dokument
- css/style.css   – veškeré styly
- script/tracking.js – zvýraznění aktivní sekce v navigaci + animace timeline
- galery/         – obrázky

## Použití AI
Při tvorbě projektu jsem využíval GitHub Copilot jako pomocný nástroj pro:
- psaní textů souvislých textů
- porozumění a ladění JavaScriptu (IntersectionObserver, scroll tracking)


Veškerý kód jsem sám napsal, a rozuměl mu.