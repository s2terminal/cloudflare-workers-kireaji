FROM nginx:1.19-alpine
WORKDIR /app

# nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# wrangler
RUN apk add nodejs npm
RUN npm install @cloudflare/wrangler

CMD nginx && npx wrangler dev
