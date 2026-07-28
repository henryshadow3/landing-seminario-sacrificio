FROM node:22-bookworm-slim AS construccion
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=construccion /app/dist /usr/share/nginx/html/seminarios/el-sacrificio-de-los-que-no-esperan
EXPOSE 80
