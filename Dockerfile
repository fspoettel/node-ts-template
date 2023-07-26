# use alpine as base image
FROM node:20-alpine AS base

# install locked dependencies via `npm ci`
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json .
RUN npm ci

# build typescript with @swc/core. prune devDependencies from node_modules after.
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY tsconfig.json .swcrc package.json .
COPY src ./src
RUN npm run build && npm prune --omit=dev

# runner
FROM base AS runner

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /app

# run as non-root user.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

COPY --from=build --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=nodejs:nodejs /app/dist ./dist
COPY --from=build --chown=nodejs:nodejs /app/package.json .

USER nodejs

EXPOSE 3000

CMD npm run start
