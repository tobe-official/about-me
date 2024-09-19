#!/bin/sh
set -e
echo "$CLOUDFLARE_ORIGIN_CERTIFICATE" > /etc/ssl/raphael-schreiber.pem
echo "$CLOUDFLARE_ORIGIN_CA_KEY" > /etc/ssl/raphael-schreiber.key

npm run prod &

nginx -t
nginx -g 'daemon off;'
