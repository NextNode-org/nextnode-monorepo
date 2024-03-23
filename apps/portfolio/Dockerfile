# ------------------ BASE ------------------
FROM node:20-alpine as base 
# RUN apk add --no-cache libc6-compat
# RUN apk update

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN npm install -g pnpm@latest
RUN pnpm add -g turbo@latest
 

# ------------------ BUILD ------------------
FROM base as builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Declare env here :
# ARG MYENV

WORKDIR /app

COPY . .

RUN turbo prune --scope=portfolio --docker


# ------------------ INSTALL ------------------
FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

COPY --from=builder /app/out/full .

RUN turbo build --filter portfolio


# ------------------ RUN ------------------
FROM base AS runner
WORKDIR /app

# Assign env here :
ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/portfolio/next.config.mjs .
COPY --from=installer /app/apps/portfolio/package.json .

COPY --from=installer  --chown=nextjs:nodejs /app/apps/portfolio/.next/standalone ./
COPY --from=installer  --chown=nextjs:nodejs /app/apps/portfolio/.next/static ./apps/portfolio/.next/static
COPY --from=installer  --chown=nextjs:nodejs /app/apps/portfolio/public ./apps/portfolio/public

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node apps/portfolio/server.js
