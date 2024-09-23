### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install angular cli
RUN npm install -g @angular/cli

#### install project dependencies
RUN npm install

#### copy things
COPY . .

#### generate build --prod
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist/bookproject /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]






#FROM node:20-alpine AS builder
#
#WORKDIR /app
#
#COPY . .
#
#RUN npm ci
#
#RUN npm run build --prod
#
#
#FROM node:20-alpine AS production
#
#RUN addgroup -g 2000 -S appgroup
#RUN adduser -DH -s /sbin/nologin -u 2000 -G appgroup -S appuser
#
#WORKDIR /app
#
## Copy needed files
#COPY --from=builder /usr/src/app/dist
#COPY --chown=appgroup:appuser --from=builder /app/dist/about-me/browser /usr/share/nginx/html
#COPY --chown=appgroup:appuser --from=builder /app/nginx.conf /etc/nginx/nginx.conf
#COPY --chown=appgroup:appuser --from=builder /app/entrypoint.sh /app/entrypoint.sh
#COPY --chown=appgroup:appuser --from=builder /app/package.json  /app/package.json
#
#RUN apk add nginx
#
## Create the necessary directories with correct permissions
#RUN mkdir -p /var/ /run/ /logs/ && \
#    chown -R appuser:appgroup /var/ /run/ /logs/ /usr/
#
#RUN chmod +x /app/entrypoint.sh
#
#ENTRYPOINT ["./entrypoint.sh"]
