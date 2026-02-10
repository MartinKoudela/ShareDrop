# ShareDrop

Jednoduchá webová aplikace pro sdileni souboru. Jeden uzivatel nahraje soubor, druhy si ho muze stahnout.

## Technologie

### Backend
- **Node.js** + **Express** - HTTP server a REST API
- **TypeScript** - typova bezpecnost
- **Multer** - zpracovani nahravanych souboru (multipart/form-data)

### Frontend
- **HTML/CSS** - staticke stranky
- **Vanilla JS** - zadny framework, jednoduche a lehke

### Uloziste
- **Lokalni souborovy system** - soubory se ukladaji primo na disk serveru do slozky `uploads/`

## Planovane funkce

### Faze 1 - Zaklad
- [x] Inicializace projektu (TypeScript, Express)
- [ ] Upload souboru pres webove rozhrani
- [ ] Zobrazeni seznamu nahranych souboru
- [ ] Stahovani souboru

### Faze 2 - Ochrana heslem
- [ ] Moznost nastavit heslo pri nahravani souboru
- [ ] Vyzadovani hesla pred stazenim chraneneho souboru
- [ ] Hashovani hesel (bcrypt)

## Struktura projektu

```
ShareDrop/
├── src/
│   ├── html/          # Frontend stranky
│   │   └── index.htm
│   └── ts/            # Backend TypeScript zdrojaky
│       └── index.ts   # Vstupni bod serveru
├── uploads/           # Nahrane soubory (gitignored)
├── dist/              # Zkompilovany JS (vystup tsc)
├── package.json
└── tsconfig.json
```

## API Endpointy

| Metoda | Endpoint            | Popis                        |
|--------|---------------------|------------------------------|
| GET    | `/`                 | Hlavni stranka               |
| GET    | `/files`            | Seznam nahranych souboru     |
| POST   | `/upload`           | Nahrani souboru              |
| GET    | `/download/:id`     | Stazeni souboru              |

## Spusteni

```bash
# Instalace zavislosti
npm install

# Kompilace TypeScriptu
npm run build

# Spusteni serveru
node dist/index.js
```

## Postup vyvoje

1. Nastavit Express server s routami
2. Implementovat upload souboru (Multer)
3. Implementovat vypis a stahovani souboru
4. Pridat frontend formular pro nahravani
5. Pridat ochranu souboru heslem
