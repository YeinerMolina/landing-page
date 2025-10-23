# ===== STAGE 1: Build =====
FROM node:20-alpine AS builder
RUN apk add --no-cache git
WORKDIR /app

COPY package*.json ./
RUN npm ci --silent
COPY . .

RUN npm run build:prod

# ===== STAGE 2: Production =====
FROM node:20-alpine AS production
RUN addgroup -S nodejs && adduser -S angular -G nodejs
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --silent

COPY --from=builder --chown=angular:nodejs /app/dist ./dist

USER angular
EXPOSE 4000
ENV NODE_ENV=production
ENV PORT=4000

CMD ["node", "dist/ymdev-app/server/server.mjs"]
