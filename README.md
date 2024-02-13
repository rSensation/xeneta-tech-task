# xeneta-tech-task

A small prototype to showcase 2 products structured, developed and maintained as a frontend monorepo with a shared library.

## Lint

You can lint each package/app individually by navigating to its folder and running `pnpm lint`. Alternativelly, you can run `pnpm lint` from the root folder to lint all the packages/apps at once.

## How to run

1. Run `pnpm i` in the root folder
2. Run `pnpm build:packages` to build all shared packages
3. To run any app, you need to add **.env** file to its folder (apps/air-freight or apps/ocean-freight). I didn't include it in the repo to avoid leaking the API key and as a general best practice:

```console
# <ORIGIN>/prod/air - for Air Freight, <ORIGIN>/prod/ocean - for Ocean Freight
VITE_API_URL=<API_url>
VITE_API_KEY=<API_key>
```

4. To run Air Freight application:

- run `pnpm dev:air` from the root folder
- or navigate to the `apps/air-freight` folder and run `pnpm dev`

5. To run Ocean Freight application:

- run `pnpm dev:ocean` from the root folder
- or navigate to the `apps/ocean-freight` folder and run `pnpm dev`

## Tools

1. For monorepo structure management, I used _pnpm_ knowing that it's a perfect tool for that and to get more familiar with it.
2. For build, I used _vite_, because it is easy to set up and powerful at the same time.
3. For charts, I used _recharts_ because it was simple, easy to use and good enough for this demonstration. If I had to choose something for a bigger project, I would prefer more powerful and customizable libraries like _d3.js_ or _echarts_.
4. For data flow, I used local state to keep it simple. For a bigger project, I would prefer _Redux Toolkit_.

## Data Flow

1. Locations are loaded outside of the rendering components (in the `Content` component). It is done so that if would be easier to add SSR in the future.
2. Market Rates are loaded on each origin/destination change and cached by a simple cache hook.
3. All details of data fetching are not shared between apps and instead copypasted. It is done intentionally to keep each app more independent from each other and from potentional API changes.
