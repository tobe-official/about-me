#!/bin/sh
set -e
echo "$CLOUDFLARE_ORIGIN_CERTIFICATE" > /etc/ssl/raphael-schreiber.pem
echo "$CLOUDFLARE_ORIGIN_CA_KEY" > /etc/ssl/raphael-schreiber.key


# Ensure Nginx configuration is valid
nginx -t

# Start Nginx in the foreground
nginx -g 'daemon off;'
