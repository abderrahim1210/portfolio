# Developer Portfolio (React + TypeScript + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check + production build in /dist

## Fill in (search the project for "TODO")
- src/data/profile.ts   name, email, GitHub, LinkedIn, CV path, optional form endpoint
- src/data/projects.ts  repo / live URLs, stats, features
- src/data/timeline.ts  real dates and organization names
- public/cv.pdf         your CV
- src/data/ui.ts        all interface and section copy (EN / FR / AR)

## Add a language
Extend `Lang` in src/lib/i18n.tsx and add the key to each `L` object (TypeScript flags every missing one).
