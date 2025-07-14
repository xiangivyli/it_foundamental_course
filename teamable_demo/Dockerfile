# Stage 1: Build the Vue app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Stage 2: Run the Node.js server
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy only the built files and server code
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./

# Set environment variables if needed
ENV PORT=5000
EXPOSE 5000
CMD ["node", "server.js"]
