# PRO2001-WorkReq3 : Entertainment Gallery 🎬

En responsiv React-app med seks av mine favoritt-TV-serier.

Appen har to sider:

- **Galleri** viser alle seks seriene i et responsivt rutenett. Det vises ett kort per rad på små skjermer, to på mellomstore skjermer og tre på store skjermer.

- **Detaljside** viser mer informasjon om serien du har valgt. «Les mer»-knappen på kortet åpner detaljsiden og du kan enkelt navigere tilbake til galleri med «Tilbake til galleri»-knappen.

## Slik kjører du appen

1. Klon repoet:

   ```bash
   git clone https://github.com/LinnSandra/PRO2001_WorkReq3.git
   ```

2. Gå inn i prosjektmappen:

   ```bash
   cd PRO2001_WorkReq3
   ```

3. Installer pakkene:

   ```bash
   npm install
   ```

4. Start utviklingsserveren:

   ```bash
   npm run dev
   ```

5. Åpne adressen som vises i terminalen. Den er vanligvis `http://localhost:5173`.

## Oppbygging

- `src/data.js` inneholder informasjonen om seriene i en array med objekter.
- `src/mediacard.jsx` er en gjenbrukbar kortkomponent. Den får `id`, `title`, `image` og `description` som props.
- `src/gallery.jsx` viser seriene ved å gå gjennom dataene og lage ett `MediaCard`-kort per serie. React Bootstrap-gridet viser ett kort per rad på små skjermer, to på mellomstore skjermer og tre på store skjermer.
- `src/detail.jsx` viser mer informasjon om én serie. Den bruker `useParams()` til å lese serie-ID-en fra URL-en.
- `src/App.jsx` setter opp rutene til galleriet og detaljsidene.
- Plakatbildene ligger i `public/img/`, og skrifttypen Degolan ligger i `public/fonts/`.
- `src/minimalistic.css` inneholder appens styling.

## Bygget med

- React
- JavaScript
- Vite
- React Bootstrap
- React Router
- CSS
