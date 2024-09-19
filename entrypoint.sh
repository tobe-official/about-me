#!/bin/sh
set -e
echo "$CLOUDFLARE_ORIGIN_CERTIFICATE" > /etc/ssl/raphael-schreiber.pem
echo "$CLOUDFLARE_ORIGIN_CA_KEY" > /etc/ssl/raphael-schreiber.key

npx ng serve --host 127.0.0.1 --port 3000 &

nginx -t
nginx -g 'daemon off;'
