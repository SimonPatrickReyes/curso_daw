FROM php:7.4-apache
RUN apt-get update && apt-get upgrade -y && apt-get install -y git && apt-get install nano
COPY index.html /var/www/html/ 
COPY info.php /var/www/html/
ENV minombre Simon