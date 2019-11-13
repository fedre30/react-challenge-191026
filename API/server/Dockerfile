### BUILD PHP image on apache server
### ADD composer and other dependancies to image

# Base image
FROM php:7.2-apache

# Fix debconf warnings upon build
ARG DEBIAN_FRONTEND=noninteractive

# Run apt update and install some dependancies needed for docker-php-ext
RUN apt update && apt install -y apt-utils sendmail mariadb-client pngquant unzip zip libpng-dev libmcrypt-dev git \
  curl libicu-dev libxml2-dev libssl-dev libcurl4 libcurl3-dev libsqlite3-dev libsqlite3-0

# Install PHP extensions
RUN docker-php-ext-install mysqli bcmath gd intl xml curl pdo_mysql pdo_sqlite hash zip dom session opcache

# Install Composer
#COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
#RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
#RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
#RUN php composer-setup.php
#RUN php -r "unlink('composer-setup.php');"

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version


# Update web root to public
# See: https://hub.docker.com/_/php#changing-documentroot-or-other-apache-configuration
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Enable mod_rewrite
RUN a2enmod rewrite
