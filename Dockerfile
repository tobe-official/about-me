# Stage 1: Build Angular app
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code and build the Angular app
COPY . .
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy the Angular build to the NGINX html folder
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Copy custom NGINX configuration for HTTPS
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 443

# Start NGINX
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
