# Feladat:

### Webapp készítése NextJS-el, melynek az alábbi oldalakkal/funkciókkal kell rendelkeznie:

- **/blog/id oldalak:** itt az id 1-től 100-ig vehet értékeket, tehát lehet blog/1, blog/10, blog/55, stb.. Mindegyik oldalra csak annyit írj ki: Az URL-ben szereplő id: [id], és a négyzete [id négyzete]. Fontos, hogy szerver oldali renderelést használj.

- **/auth-check:** Ezt az oldalt csak authentikált user nyithatja meg. Használj Bearer Tokent, melynek ellenőrzésekor a szerver akkor vegye érvényesnek a tokent, ha számra végződik. Ellenkező esetben irányítsd a usert az auth-failed oldalra ahol csak annyi van kiírva, hogy hozzáférés megtagadva.

- **/is-even:** Az oldalon egy input, és egy gomb szerepel. A gombra kattintással elküldöd az input értékét egy általad meghatározott endpoint-nak, ami válaszol, hogy páros vagy páratalan-e a szám. A választ írd ki az oldalra.\
  **FONTOS:** az összes oldal rendelkezzen egy minimális navbar-ral, ahol csak annyi van kiírva, hogy “Teszt feladat”. Ez a komponens ne külön-külön legyen behúzva az oldalakra.
