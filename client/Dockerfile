# Set the base image to Ubuntu
FROM kyma/docker-nginx

# File Author / Maintainer
MAINTAINER Giuseppe Rodriguez, g@herman-scheer.com

# Install dependencies
RUN apt-get update \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Copy files
COPY public/ /var/www

# Run
CMD 'nginx'
