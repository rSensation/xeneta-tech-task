# xeneta-tech-task

A small prototype to showcase 2 products structured, developed and maintained as a frontend monorepo with a shared library.

## Prerequisites

To run this code, you need the latest Node js installed with pnpm functionality turned on. To run docker example, you would need Docker Desktop installed.

## Lint

You can lint each package/app individually by navigating to its folder and running:
```sh
pnpm lint
```
Alternativelly, you can run `pnpm lint` from the root folder to lint all the packages/apps at once.

## How to run

From the root folder, run:
```sh
pnpm i
```

Then build all shared packages:
```sh
pnpm build:packages
```

To run any app, you need to edit **.env** file in app's folder (apps/air-freight or apps/ocean-freight). I didn't include values in the repo to avoid leaking the API key and as a general best practice:
```sh
VITE_API_URL=<API_url>
VITE_API_KEY=<API_key>
```

To run Air Freight application, run this command from the root folder:
```sh
pnpm dev:air
```

To run Ocean Freight application, run this command:
```sh
pnpm dev:ocean
```

## How to build

Run corresponding build task from the root folder:
```sh
# for air-freight
pnpm build:air
# for ocean-freight
pnpm build:ocean
```

## Docker

There is an example of conainerization with Docker for Air Freight project. To run the production preview of the project:
```sh
docker build . -f ./apps/air-freight/Dockerfile -t "air-freight"
docker run -p 8000:8000 air-freight
```

The example uses Vite's _preview_ functionality to check your production build quickly, but Dockerfile could be easily changed for deploy with any deployment server.

## Tools

1. For monorepo structure management, I used _pnpm_ knowing that it's a perfect tool for that and to get more familiar with it.
2. For build, I used _vite_, because it is easy to set up and powerful at the same time.
3. For charts, I used _recharts_ because it was simple, easy to use and good enough for this demonstration. If I had to choose something for a bigger project, I would prefer more powerful and customizable libraries like _d3.js_ or _echarts_.
4. For data flow, I used local state to keep it simple. For a bigger project, I would prefer _Redux Toolkit_.
5. For tests, I used _Vitest_ and _React Testing Library_: they both quite powerful and easy to use when it comes to testing React code with Vite builder. I only covered **packages/common** subproject just for the demo purpose, but it could be easily set up for other projects as well. To run tests, navigate to packages/common folder and run:
```sh
pnpm test
```

## Data Flow

1. Locations are loaded outside of the rendering components (in the `Content` component). It is done so that if would be easier to add SSR in the future.
2. Market Rates are loaded on each origin/destination change and cached by a simple cache hook.
3. All details of data fetching are not shared between apps and instead copypasted. It is done intentionally to keep each app more independent from each other and from potentional API changes.
