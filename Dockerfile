FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build --prod


FROM nginx:alpine AS application

ARG CLOUDFLARE_ORIGIN_CERTIFICATE
ARG CLOUDFLARE_ORIGIN_CA_KEY

RUN addgroup -g 2000 -S appgroup
RUN adduser -DH -s /sbin/nologin -u 2000 -G appgroup -S appuser

WORKDIR /app

COPY --chown=appgroup:appuser --from=builder /app/dist/about-me/browser /usr/share/nginx/html
COPY --chown=appgroup:appuser --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --chown=appgroup:appuser --from=builder /app/entrypoint.sh /app/entrypoint.sh

RUN echo "${CLOUDFLARE_ORIGIN_CERTIFICATE}" > /etc/ssl/raphael-schreiber.pem
RUN echo "${CLOUDFLARE_ORIGIN_CA_KEY}" > /etc/ssl/raphael-schreiber.key

RUN chmod +x ./entrypoint.sh

USER appuser

ENTRYPOINT [ "./entrypoint.sh" ]
