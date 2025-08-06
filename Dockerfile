# Base stage for both development and production
FROM node:18-alpine AS base

WORKDIR /app

# Copy package files
COPY package*.json ./

# Development stage
FROM base AS development
RUN npm install
# Install Tailwind CSS dependencies  
RUN npm install tailwindcss postcss autoprefixer
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage  
FROM base AS production
RUN npm ci --only=production
# Install Tailwind CSS dependencies for production
RUN npm install tailwindcss postcss autoprefixer
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
