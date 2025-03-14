# Frontend alkalmazásfejlesztés tematika

## [Basic Concepts](https://www.youtube.com/watch?v=lkIFF4maKMU)

## [![Logók](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)](https://github.com/logos)

- github regisztráció
- git telepítés
- git beállítása
- git init, clone, add, commit, push, pull,
- git pull --rebase,
- .gitignore
- index.html, README.md
- Beállítások, GitHub Pages
- Domain beállítások
- Adatvédelmi tudnivalók, GitGuardian

## [VSCode](https://code.visualstudio.com/) használata

- kód bevitel
- UTF-8, Szimbólumok
- témák használata
- pluginek
  - ESLint, Prettier
  - Indent-rainbow, Material Icons
  - Live Server
  - Live Share
  - Markdown All in One
  - IntelliCode/Codeium
  - Svelte preview
- Svelte counter példaalkalmazás

## Űrlap alapfogalmak, űrlapelemek

- google űrlap készítése
- input/textbox (rövid válasz / bekezdés)
- select (legördülő lista)
- option (jelölőnégyzetek)
- radio buttons (feleletválasztós)
- file input (fájl feltöltése)
- range input (lineáris skála)
- feladatválasztós rács / jelölőnégyzet rács
- dátum/idő
- táblázat hozzárendelése Form-hoz

## HTML/CSS/Markdown/SVG/JS ismétlés (Vanilla)

- [Markdown](https://www.markdownguide.org/basic-syntax/)
- HTML objektumok, attribútumok, szelektorok
- CSS szelektorok
- Táblázatok
- Grid
- FlexBox
- Űrlapok, Űrlapelemek (form/input/select/...)
- Események
- Favicon
- .css file, \<link>
- CSS Szintaxis, Szelektorok, Színek, Háttér, Opacity
- Display, Box model, Border, Text, Font
- Position
- Külső CSS/JS könyvtárak és egyebek
  - [Google Fonts](https://fonts.google.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Semantic UI](https://semantic-ui.com/)
- SVG formátum, SVG használata HTML-ben
- CSS Transform
- CSS Animációk
  - animation
  - @keyframes
- [SCSS/SASS](https://jsfiddle.net/boilerplate/scss)
- JavaScript online editor
  - [Vanilla](https://playcode.io/javascript)
  - [JQuery](https://playcode.io/jquery)
  - [Svelte](https://playcode.io/svelte)

## JavaScript/TypeScript/Svelte (Browser JS)

- JavaScript megjelenítés
  - Browser DevTools: elemek, vizsgálat, konzol, források
  - window, document objects, DOM
  - getElementById, querySelectorAll()
  - element attribútumok (id, class, draggable, ...)
  - \<script src='...'\>, \<script type="module" ...\>
  - _SVELTE {}, bind:value, ..._
- Eseménykezelés __~Függvények__
  - böngésző események
  - onclick, keydown, keyup, onmousemove, onmouseout, ...
  - oncontextmenu="return false"
  - eseménybuborékozás, event.stopPropagation()
  - oninput, onchange, dragstart, dragover, drop...
  - _SVELTE bind:value_
  - _SVELTE események (on:click, on:dragstart, ...)_
- Szintaxis
  - Értékek, típusok (számok, szöveg)
  - Változók, definiálás, értékadás
  - (form?.i1 || '')
  - _SVELTE var, let, const_
  - _SVELTE számított értékek: $: ௐ_
  - JavaScript / TypeScript
    - alap típusok: string, number, boolean
    - bigint, symbol, object, funtion, any
  - Kulcsszavak
  - Kommentek: //, /⁕ &lt;!-- ண -->
  - Operátorok, kifejezések, precedencia
  - String függvények, template
  - Feltételes értékadás: ண ? ண : ண
- Függvények
  - function f() {}
  - f = (...) => { ... ; return ௐ}
  - f = ௐ => ண
  - alapértelmezett érték
  - rest paraméter ( ...p )
  - arguments
  - objektum paraméter
  - beépített függvények
  - generátorfüggvények, yield, yield*
- Tömbök (listák)
  - Lista létrehozása
  - Elem hozzáadása, adott elem kiválasztása
  - Elem törlése, adott elem keresése
  - Szűrés, rendezés, elemek módosítása
- Utasítások
  - if, elseif, else, switch...case
  - for, .forEach(ண), .map(ண), ...
  - _SVELTE_
    - _{#if ண} ... {:else if ண} ... {:else} ... {/if}_
    - _{#each ஃ as obj, index (key)} ... {:else} ... {/each}_
    - _{#each items as { id, name, qty }, i (id)} ... {/each}_
    - _{#await expression}...{:then name}...{:catch name}...{/await}_
    - _{#key expression}...{/key}_
  - body onload()
  - _SVELTE: onMount()
  - try...catch
- Objektumok
  - jellemzők
  - metódusok
  - get, set
  - object: jellemzők, metódusok
  - Object: jellemzők, metódusok
- Osztályok
  - jellemzők (property - tulajdon)
  - private, public
  - metódusok (method - módszer)
  - constructor
  - extends, static
  - példányosítás, new (instance - eset)
  - statikus metódusok
  - statikus jellemzők
- Beépített osztályok
  - Math
    - E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2
    - abs, sin, cos, asin, acos, ceil, trunc, floor, round
    - sin, cos, exp, sgn, sqrt, log, log2, log10
    - max, min, pow, random
  - Object
    - Constructor
    - Static methods
    - Instance methods
  - Array
    - length
    - fill, every, join, keys, values, push, pop, *shift*, *unshift*
    - splice, toSpliced, reverse, toReversed
    - forEach, map, filter, sort, toSorted
  - Set
    - size
    - add, delete, has, keys (values), forEach, clear
    - union, intersection, symmetricDifference
  - Map, WeakMap
    - size
    - set, has, gat, delete, forEach, keys, values, clear
  - String
    - Instance methods and propery
  - Date
  - eval()
  - JSON
  - RegExp
  - Promise
  - FormData
  - Screen
- Beépített objektumok
  - document
    - getElementById
    - createElement
    - querySelectorAll
  - cookieStore
- Browser DevTools: Alkalmazás
  - Helyi tárhely (localStorage)
  - Cookie-k
  - IndexedDB
  - ReadableStream
- TypeScript: interface, implements, private, protected, \<T>
- [JavaScript referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## JavaScript fogások

- String template, Filterprefix
- Array (map, forEach, fill, sort, filter, reduce)
- SetInterval, SetTimeout
- Callback
- Promise
- async, await
- Fetch
  - Stream
  - Stream => Text
  - Stream => JSON
- Cookie-k
- EventSource
- Date, Time
- JSON
- RegExp
- DOMParser
- Modulok, CDN
  - [jQuery](https://jquery.com/)
  - [Google Sheets Parser](https://www.npmjs.com/package/public-google-sheets-parser)
  - [levenshtein](https://github.com/gf3/Levenshtein)
  - [marked](https://marked.js.org/)
  - [highlight.js](https://highlightjs.org/) v. [prism.js](https://prismjs.com/)
  - [Chart.js](https://www.chartjs.org/) v. [vis.js](https://visjs.org/)
- cdnjs api
- Browser Alkalmazás
  - Helyi tárhey (localStorage, sessionStorage)
  - Firefox: Svelte Dev Tools
- FrontEnd technológiák, fogások
  - JS => HTML Táblázat generálása
    - Table, Flex, Grid
  - JS => SVG grafika generálása
  - &lt;select> - optionok JavaScriptes kitöltése
  - Egér és billentyűzet események
    - eseménykezelés JS-ben
    - eseménykezelés generálása
  - Levenshtein Filter készítése
  - Egyszerű HTML-CSS-JS játékok készítése
    - Amőba, Aknakereső, Tron, Tetris, Tologatós kirakó, ...
  - Pozíció (relative, fixed) és méret módosítása JS segítségével
    - naptár megjelenítő alkalmazás fejlesztése
    - órarend megjelenítő alkalmazás fejlesztése
  - Drag & Drop
    - drag, dragstart, dragenter, dragover, dragend, dragleave, drop
    - Drag & Drop - fájl feltöltés  
    - Kártyajáték, Kirakó készítése, Mondrian Blocks
  - Animációk, fizikai szimulációk
    - SVG objektumok mozgatása
    - Egyenes vonalú egyenletes mozgás, sebességvektor
    - Gyorsulás, Lassulás, Gravitáció
    - Ütközésdetektálás
    - Lendületmegmaradás törvénye és alkalmazása
  - HTML, CSS, JS Játékok készítése
  - Design fogások
    - BootStrap

## HTML/CSS/JS Mobile

- viewport
- @media
- inspect
- device toolbar
- touchstart, touchend, touchmove, touchcancel események
- dragndrop speciális tulajdonságok
- navigator.geolocation
- DeviceOrientationEvent
- DeviceMotionEvent
  - acceleration, accelerationIncludingGravity
  - interval
  - rotationRate

## NodeJS frontend

## [Vite](https://vite.dev/)

- CLI
- Plugins
- DevServer, Build, Static, API

## [SvelteKit](https://svelte.dev/docs/svelte/overview)

- [Tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- [Examples, Játszótér](https://svelte.dev/playground/hello-world?version=5.20.2)
- Runes
- Template syntax (#if, #each, #await, #key)
  - speciális elemek (@render, @html, @debug, @const)
- Svelte runtime
  - onMount, beforeUpdate, afterUpdate, afterNavigate
  - setContext, getContext, hasContext, getAllContexts
  - createEventDispatcher
- Svelte Store
- Motion, Transition, Animation
- Svelte Prepocessors: SASS, PUG, TypeScript, ...

## Drizzle

- config
- schema files
- db:push
- MySQL
- SQLite

## Lucia

- sessions
- user tábla módosítása

## SvelteKit Deployment: Github - Netlify - Aiven

## Integrációs tesztelés

## Full-stack multiplatform alkalmazás fejlesztése

  {Tárgyak közötti együttműködéssel}

- Felhasználó kezelő modul
  - Bejelentkező űrlap¹
  - Regisztrációs űrlap¹
  - Felhasználói profil szerkesztő¹
- Funkcionális modul¹
  - Rendszerelemek, komponensek azonosítása
  - Komponensek tervezése
  - Komponenstesztek tervezése
  - Komponensek fejlesztése
  - Komponensek tesztelése
- Elkészült rendszer tesztelése
- Elkészült rendszer közzététele

  {¹ tervezése és fejlesztése}

## CMS telepítése, működtetése

---

[Központi tematika](pdf/Frontend%20programozás%20és%20tesztelés.pdf)

---

### Mérföldkövek

1. GIT/VSCode beállítása, használata + HTML/CSS/JS + GitGub Deploy
2. JavaScript/JQuery/Angular/Vue/Svelte (Static FrontEnd GitGub Deploy)
3. Ajax MVC FullStack alkalmazásfejlesztés és Deploying
- (SvelteKit + MySQL/SQLite)

