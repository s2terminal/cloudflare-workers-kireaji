FROM nginx:1.19-alpine
WORKDIR /app

# nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# wrangler
RUN apk add nodejs npm
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --also=dev

CMD nginx && npx @cloudflare/wrangler dev
