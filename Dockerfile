FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g @angular/cli

COPY . .

RUN npm ci

RUN npm run build --prod


FROM node:20-alpine AS production

RUN addgroup -g 2000 -S appgroup
RUN adduser -DH -s /sbin/nologin -u 2000 -G appgroup -S appuser

WORKDIR /app

# Copy needed files
COPY --chown=appgroup:appuser --from=builder /app/dist/about-me/browser /usr/share/nginx/html
COPY --chown=appgroup:appuser --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --chown=appgroup:appuser --from=builder /app/entrypoint.sh /app/entrypoint.sh
COPY --chown=appgroup:appuser --from=builder /app/package.json  /app/package.json

RUN apk add nginx

# Create the necessary directories with correct permissions
RUN mkdir -p /var/ /run/ /logs/ && \
    chown -R appuser:appgroup /var/ /run/ /logs/ /usr/

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
