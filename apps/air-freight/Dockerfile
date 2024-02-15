FROM node:21 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS dependencies
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile

FROM dependencies as build
RUN pnpm build:packages
RUN pnpm build:air

FROM build as pruned
WORKDIR /app
RUN pnpm -F air-freight deploy pruned

FROM base as development
WORKDIR /app
COPY --from=pruned /app/pruned .

FROM base as deploy
WORKDIR /app
ENV NODE_ENV=production
COPY --from=pruned /app/pruned/package.json .
COPY --from=pruned /app/pruned/vite.config.ts .
COPY --from=pruned /app/pruned/dist dist
COPY --from=pruned /app/pruned/node_modules node_modules
CMD ["pnpm", "preview"]
